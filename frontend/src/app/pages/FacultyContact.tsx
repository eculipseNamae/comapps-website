import { motion } from "motion/react";
import {
  ArrowLeft,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  facultyData,
  lecturersData,
} from "@/app/data/facultyData";

export function FacultyContact() {
  const { id } = useParams<{ id: string }>();

  // Find the faculty member by ID
  const allFaculty = [...facultyData, ...lecturersData];
  const member = allFaculty.find((f) => f.id === id);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Captcha state
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>(
    {},
  );

  // Generate random captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(
        Math.floor(Math.random() * chars.length),
      );
    }
    setCaptchaText(captcha);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // If faculty member not found, redirect to faculty page
  if (!member) {
    return <Navigate to="/faculty" replace />;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters long";
    }

    if (!captchaInput.trim()) {
      newErrors.captcha = "Please enter the captcha";
    } else if (captchaInput !== captchaText) {
      newErrors.captcha = "Captcha does not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, this would send the email to the backend
      console.log("Form submitted:", {
        to: member.email,
        from: formData.email,
        name: formData.fullName,
        message: formData.message,
      });

      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Message Sent!
          </h2>
          <p className="text-slate-600 mb-6">
            Your message has been successfully sent to{" "}
            {member.name}. They will respond to your email
            address shortly.
          </p>
          <div className="space-y-3">
            <Link
              to={`/facultyprofile/${member.id}`}
              className="block w-full px-6 py-3 bg-[#4CC9BF] hover:bg-[#33AAA1] text-white font-semibold rounded-lg transition-all"
            >
              Back to Profile
            </Link>
            <Link
              to="/faculty"
              className="block w-full px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-all"
            >
              Back to Faculty
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/faculty/${member.id}`}
            className="inline-flex items-center text-[#4CC9BF] hover:text-[#33AAA1] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to
            Profile
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#4CC9BF]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-[#4CC9BF]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Contact {member.name}
              </h1>
              <p className="text-slate-600">
                {member.position}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Send a Message
            </h2>
            <p className="text-slate-600">
              Fill out the form below to send a secure message
              to this faculty member. They will receive your
              message at their institutional email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-slate-900 mb-2"
              >
                Your Full Name{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border ${errors.fullName ? "border-red-500" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900 mb-2"
              >
                Your Email{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900 mb-2"
              >
                Your Message{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full pl-12 pr-4 py-3 border ${errors.message ? "border-red-500" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent resize-none`}
                  placeholder="Type your message here..."
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-xs text-slate-500">
                Minimum 10 characters
              </p>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Verification Code{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-4 mb-2 select-none">
                    <div
                      className="text-center font-mono text-2xl font-bold text-slate-700 tracking-widest"
                      style={{
                        textShadow:
                          "2px 2px 4px rgba(0,0,0,0.1)",
                        letterSpacing: "0.3em",
                        transform: "skewX(-5deg)",
                      }}
                    >
                      {captchaText}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="absolute -right-2 -top-2 p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                    title="Generate new captcha"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => {
                  setCaptchaInput(e.target.value);
                  if (errors.captcha) {
                    setErrors((prev) => ({
                      ...prev,
                      captcha: "",
                    }));
                  }
                }}
                className={`w-full px-4 py-3 border ${errors.captcha ? "border-red-500" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent`}
                placeholder="Enter the code above"
              />
              {errors.captcha && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.captcha}
                </p>
              )}
              <p className="mt-1 text-xs text-slate-500">
                This helps us prevent spam and automated
                submissions
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-[#4CC9BF] hover:bg-[#33AAA1] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </button>
              <Link
                to={`/faculty/${member.id}`}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Privacy Notice:</strong> Your email and
              message will be sent directly to {member.name} at
              their institutional email address. Your
              information will not be stored on our servers or
              shared with third parties.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}