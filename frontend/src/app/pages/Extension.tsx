import { Users, Calendar, Target, Heart, Laptop, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect } from "react";
import { extensionAPI } from "../../services/api";

export function Extension() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [impacts, setImpacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programsData, impactsData] = await Promise.all([
          extensionAPI.getPrograms(),
          extensionAPI.getImpacts(),
        ]);
        setPrograms(programsData || []);
        setImpacts(impactsData || []);
      } catch (error) {
        console.error("Error fetching extension data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const ongoingPrograms = programs.filter(p => p.status === 'Ongoing');
  const completedPrograms = programs.filter(p => p.status === 'Completed');
  const upcomingPrograms = programs.filter(p => p.status === 'Upcoming');

  const totalBeneficiaries = impacts.reduce((acc, imp) => acc + (imp.beneficiaries_count || 0), 0);
  const totalCommunities = impacts.reduce((acc, imp) => acc + (imp.communities_count || 0), 0);
  const totalPartners = impacts.reduce((acc, imp) => acc + (imp.partner_organizations_count || 0), 0);

  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Extension Programs</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Empowering communities through technology education, outreach initiatives, and collaborative partnerships.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission in Community Service</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Computer Applications Department is committed to extending its expertise beyond the classroom,
              bringing technology education and innovation to communities throughout Mindanao and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Community Impact</h3>
              <p className="text-sm text-slate-600">Serving communities across Mindanao</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Technology Education</h3>
              <p className="text-sm text-slate-600">Free training and workshops</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Target className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Skills Development</h3>
              <p className="text-sm text-slate-600">Empowering through technical skills</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Lightbulb className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-sm text-slate-600">Fostering tech innovation locally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Ongoing Extension Programs</h2>

          <div className="space-y-8">
            {ongoingPrograms.map((program, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-1/3 relative h-64 lg:h-auto font-sans text-gray-200 flex items-center justify-center bg-gray-100">
                    {program.image ? (
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Lightbulb className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-[#4CC9BF]" />
                      <span className="text-sm text-[#4CC9BF] font-semibold">Ongoing • {program.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                    <p className="text-slate-600 mb-4">{program.description}</p>
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{program.participants_count} Participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {ongoingPrograms.length === 0 && <p className="text-center text-slate-500 italic">No ongoing programs at the moment.</p>}
          </div>
        </div>
      </section>

      {/* Completed Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Completed Extension Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {completedPrograms.map((program, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border border-[#4CC9BF]/20">
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="w-10 h-10 text-[#4CC9BF]" />
                  <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{program.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-[#4CC9BF]" />
                  <span className="text-[#33AAA1] font-semibold">{program.participants_count} Participants</span>
                </div>
              </div>
            ))}
            {completedPrograms.length === 0 && <p className="col-span-full text-center text-slate-500 italic">No completed programs listed yet.</p>}
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Upcoming Extension Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingPrograms.map((program, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-[#4CC9BF] font-semibold text-sm mb-4">{program.date}</p>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="text-sm text-slate-500">
                  Target: {program.participants_count} participants
                </div>
              </div>
            ))}
            {upcomingPrograms.length === 0 && <p className="col-span-full text-center text-slate-500 italic">No upcoming programs listed yet.</p>}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Extension Program Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{totalBeneficiaries}+</div>
              <div className="text-slate-600">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{totalCommunities}+</div>
              <div className="text-slate-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{completedPrograms.length}</div>
              <div className="text-slate-600">Programs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{totalPartners}+</div>
              <div className="text-slate-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-[#77D6CE] mb-8">
            Are you a community organization, local government unit, or NGO interested in partnering for technology
            education and extension programs? We'd love to collaborate with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:extension@comapps.msuiit.edu.ph"
              className="px-8 py-3 bg-white text-[#33AAA1] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Extension Office
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#33AAA1] transition-all"
            >
              Submit Program Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

