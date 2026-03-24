import { PageHero } from "@/components/ui/hero-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardBody } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function ChairMessagePage() {
  return (
    <>
      <PageHero
        title="Message from the Chair"
        subtitle="A welcome from the Department Chair on our vision, commitment, and aspirations."
      />

      <Section variant="muted">
        <SectionHeader
          title="From the Chair"
          subtitle="A message from our department chair about our vision, mission, and commitment to students."
          align="center"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="aspect-[3/4] rounded-3xl bg-white/60 shadow-lg overflow-hidden mb-6 border border-slate-200">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">DR</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-slate-900">Dr. Juan Dela Cruz</h3>
                <p className="text-sm text-secondary font-medium">Department Chair</p>
                <p className="text-sm text-muted-foreground mt-1">Ph.D. Computer Science</p>
                <p className="text-sm text-muted-foreground">University of the Philippines</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="border-0 shadow-none">
                <CardBody className="space-y-6">
                  <Quote className="h-12 w-12 text-secondary/40" />
                  <div className="space-y-5 text-slate-700 leading-relaxed">
                    <p>
                      Welcome to the Department of Computer Applications! It is my distinct honor to lead 
                      a department that has been at the forefront of computing education for over 25 years.
                    </p>
                    <p>
                      Our commitment to excellence is reflected in our AACCUP Level III accreditation status, 
                      our research productivity, and most importantly, in the success of our graduates who 
                      continue to make significant contributions in the technology sector both locally and internationally.
                    </p>
                    <p>
                      We take pride in our outcomes-based curriculum that integrates theoretical foundations 
                      with practical applications, ensuring that our students are not just academically prepared 
                      but are also industry-ready upon graduation. Our partnerships with leading technology 
                      companies provide our students with invaluable internship opportunities and exposure to 
                      real-world challenges.
                    </p>
                    <p>
                      Our faculty members are not just educators but active researchers contributing to the 
                      advancement of computing knowledge. Their expertise spans artificial intelligence, 
                      data science, cybersecurity, software engineering, and emerging technologies.
                    </p>
                    <p className="font-semibold text-slate-900">
                      Together, let us shape the future of technology.
                    </p>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-10 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900">Dr. Juan Dela Cruz</p>
                <p className="text-sm text-muted-foreground">Department Chair, Computer Applications</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
