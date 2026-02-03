import { Mail, Phone, MapPin, Clock, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact and Support</h1>
          <p className="text-xl text-slate-100 max-w-3xl">
            Get in touch with us for inquiries, admissions, or any questions about our programs.
          </p>
        </div>
      </section>

      {/* Contact Info Only */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-8">
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
                </div>

                <div className="space-y-6">
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
            </div>

            {/* Social Media */}
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Us on Facebook</h3>
              <div className="flex justify-center">
                <a
                  href="https://www.facebook.com/MSUIIT.CCS.CA.Dept"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#1877F2] text-white rounded-lg font-semibold hover:bg-[#166fe5] transition-colors shadow-lg"
                >
                  <Facebook className="w-6 h-6" />
                  <span>MSU-IIT Computer Applications Department</span>
                </a>
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
              { q: 'Is the program accredited?', a: 'Yes, the BS in Computer Applications program is accredited by AACCUP at Level III status.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}