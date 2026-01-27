import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import { inquiriesAPI } from '@/services/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);

    try {
      await inquiriesAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      setSubmitMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact and Support</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Get in touch with us for inquiries, admissions, or any questions about our programs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="juan.delacruz@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+63 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions</option>
                    <option value="curriculum">Curriculum Questions</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Type your message here..."
                  />
                </div>
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage.text}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#4CC9BF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Office Location</h3>
                      <div className="text-slate-700">
                        Computer Applications Department<br />
                        College of Computer Studies<br />
                        Mindanao State University - Iligan Institute of Technology<br />
                        Tibanga Highway, Iligan City, Lanao del Norte<br />
                        Philippines 9200
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#4CC9BF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Phone Numbers</h3>
                      <p className="text-slate-600">
                        Office: +63 (063) 223 8641<br />
                        Mobile: 0997 785 5711<br />
                        Admissions Hotline
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4CC9BF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email Addresses</h3>
                      <p className="text-slate-600">
                        Admissions: admissions2025@g.msuiit.edu.ph<br />
                        Department: comapps@msuiit.edu.ph<br />
                        General Inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#4CC9BF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Office Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 12:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#4CC9BF]/10 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us on Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-[#4CC9BF] rounded-lg flex items-center justify-center hover:bg-[#33AAA1] transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#4CC9BF] rounded-lg flex items-center justify-center hover:bg-[#33AAA1] transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#4CC9BF] rounded-lg flex items-center justify-center hover:bg-[#33AAA1] transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'What is the admission process?', a: 'Submit an online application, take the entrance exam, provide required documents, and wait for the admission decision. The entire process typically takes 2-4 weeks.' },
              { q: 'What are the tuition fees?', a: 'Tuition is approximately ₱39,000 per semester, which includes tuition, miscellaneous fees, and laboratory fees. Scholarships are available.' },
              { q: 'Can I choose my specialization track?', a: 'Yes, students choose between IoT and Embedded Systems specialization during their third year, based on their interests and academic performance.' },
              { q: 'Are there job placement services?', a: 'Yes, we have a dedicated career services office that provides job placement assistance, resume workshops, and direct connections to hiring companies.' },
              { q: 'Is the program accredited?', a: 'Yes, the BS in Computer Applications program is accredited by CHED (Commission on Higher Education) at Level III status.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Find Us on the Map</h2>
          <div className="bg-slate-200 rounded-xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-semibold">Mindanao State University - Iligan Institute of Technology</p>
              <p className="text-slate-500">Tibanga Highway, Iligan City, Lanao del Norte</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}