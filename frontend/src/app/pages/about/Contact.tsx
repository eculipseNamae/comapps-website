import { PageHero } from "@/components/ui/hero-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the Department of Computer Applications."
        backgroundClassName="bg-[url('https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader title="Send Us a Message" subtitle="We’ll get back to you within 2 business days." align="left" />
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <Input placeholder="Enter your full name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <Input type="email" placeholder="Enter your email" className="form-input" />
                </div>
              </div>
              <div>
                <label className="form-label">Subject *</label>
                <Input placeholder="What is your inquiry about?" className="form-input" />
              </div>
              <div>
                <label className="form-label">Message *</label>
                <Textarea placeholder="Type your message here..." className="form-input min-h-[150px]" />
              </div>
              <Button type="submit" className="btn-cta-primary">Send Message</Button>
            </form>
          </div>

          <div>
            <SectionHeader title="Contact Information" subtitle="Reach out through any of the channels below." align="left" />
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:dca@university.edu.ph" className="text-primary hover:underline">dca@university.edu.ph</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+63-2-1234-5678" className="text-primary hover:underline">+63 (2) 1234-5678</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    College of Science Building, Room 301<br />
                    University Campus<br />
                    Metro Manila, Philippines 1234
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader title="Frequently Asked Questions" subtitle="Answers to common inquiries." />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'What is the admission process?', a: 'Submit an online application, take the entrance exam, provide required documents, and wait for the admission decision. The entire process typically takes 2-4 weeks.' },
            { q: 'What are the tuition fees?', a: 'Tuition is approximately ₱39,000 per semester, which includes tuition, miscellaneous fees, and laboratory fees. Scholarships are available.' },
            { q: 'Can I choose my specialization track?', a: 'Yes, students choose between IoT and Embedded Systems specialization during their third year, based on their interests and academic performance.' },
            { q: 'Are there job placement services?', a: 'Yes, we have a dedicated career services office that provides job placement assistance, resume workshops, and direct connections to hiring companies.' },
            { q: 'Is the program accredited?', a: 'Yes, the BS in Computer Applications program is accredited by AACCUP at Level III status.' },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
