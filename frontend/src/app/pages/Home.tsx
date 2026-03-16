import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Users,
  Cpu,
  Calendar,
  Briefcase,
  BookOpen,
  Building,
  Globe,
  FlaskConical,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchHeroSlides, fetchNews, fetchEvents, fetchFacultyResearch } from "@/app/data/api";
import { useEffect, useState } from "react";

export function Home() {
  const [heroSlides, setHeroSlides] = useState<any[]>([]);
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [eventsItems, setEventsItems] = useState<any[]>([]);
  const [researchItems, setResearchItems] = useState<any[]>([]);

  const [loadingHero, setLoadingHero] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingResearch, setLoadingResearch] = useState(true);

  useEffect(() => {
    fetchHeroSlides().then(data => { setHeroSlides(data); setLoadingHero(false); }).catch(() => setLoadingHero(false));
    fetchNews(1).then(data => { setNewsItems((data.results ? data.results : data).slice(0, 3)); setLoadingNews(false); }).catch(() => setLoadingNews(false));
    fetchEvents().then(data => { setEventsItems(data); setLoadingEvents(false); }).catch(() => setLoadingEvents(false));
    fetchFacultyResearch().then(data => { setResearchItems(data); setLoadingResearch(false); }).catch(() => setLoadingResearch(false));
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const carouselSettings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, fade: true, arrows: false };

  const stats = [
    { value: "95%", label: "Employment Rate", icon: <Briefcase className="h-8 w-8" />, trend: "+3% from last year" },
    { value: "85+", label: "Scopus Publications", icon: <BookOpen className="h-8 w-8" />, trend: "5-year total" },
    { value: "700", label: "OJT Hours Required", icon: <Building className="h-8 w-8" /> },
    { value: "50+", label: "Industry Partners", icon: <Globe className="h-8 w-8" /> },
  ];

  return (
    <div>
      {/* 1. Hero Carousel Section */}
      <section className="relative bg-gradient-to-br from-[#236c65] via-[#288179] to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-2 text-sm font-medium">
                <Award className="h-4 w-4 text-[#77D6CE]" />
                AACCUP Level III Accredited
              </div>
              <div>
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                  Influencing the Future<br />
                  <span className="text-[#77D6CE]">of Technology and Innovation</span>
                </h1>
                <p className="text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                  The Department of Computer Applications delivers excellence in computing education, research, and community service. Join a community committed to innovation and global competitiveness.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/programs-admissions" className="inline-flex items-center px-6 py-3 bg-[#4CC9BF] text-white rounded-lg font-bold hover:bg-[#33AAA1] transition-all shadow-xl">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Slider {...carouselSettings}>
                  {heroSlides.length > 0 ? (
                    heroSlides.map((slide) => (
                      <div key={slide.id} className="relative">
                        <ImageWithFallback src={slide.image} alt={slide.title || "Hero Slide"} className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                          {(slide.title || slide.caption) && (
                            <div className="p-6 text-white w-full">
                              {slide.title && <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>}
                              {slide.caption && <p className="text-sm md:text-base opacity-90">{slide.caption}</p>}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-96 bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">Loading banner images...</div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats */}
      <section className="py-16 relative z-20 container mx-auto px-4 max-w-7xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 border border-slate-200 flex items-center justify-between hover:-translate-y-1 transition-transform">
              <div>
                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 font-bold mt-1 uppercase tracking-tight">{stat.label}</p>
                {stat.trend && <p className="text-xs text-[#4CC9BF] mt-2 font-bold">{stat.trend}</p>}
              </div>
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-full flex items-center justify-center text-[#33AAA1]">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Program Highlights */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Academic Programs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg hover:text-slate-800 transition-colors">
              Explore the pathways we offer for your future career in rapid application development and leading technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center text-[#4CC9BF] mb-6 group-hover:bg-[#4CC9BF] group-hover:text-white transition-colors">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">BSCA: Embedded Systems</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Focuses on the design and development of specialized computer systems integrated into larger mechanical devices.
              </p>
              <Link to="/programs/bsca/embedded-systems" className="text-sm font-bold text-[#33AAA1] flex items-center group-hover:text-[#2d958d]">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center text-[#4CC9BF] mb-6 group-hover:bg-[#4CC9BF] group-hover:text-white transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">BSCA: Internet of Things</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Specializes in connecting physical devices to the internet to collect and exchange data for smart solutions and big data.
              </p>
              <Link to="/programs/bsca/iot" className="text-sm font-bold text-[#33AAA1] flex items-center group-hover:text-[#2d958d]">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#236c65]/10 rounded-xl flex items-center justify-center text-[#236c65] mb-6 group-hover:bg-[#236c65] group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">MS Computer Applications</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Advanced graduate studies focusing on IT management, applied research, and emerging technology architectures.
              </p>
              <Link to="/programs/msca" className="text-sm font-bold text-[#236c65] flex items-center group-hover:text-[#184944]">
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">BS ECT (Legacy)</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Our foundational program in electronics technology. Note: This legacy program is closed for new admissions.
              </p>
              <Link to="/programs/bsect" className="text-sm font-bold text-slate-500 flex items-center group-hover:text-slate-700">
                View details <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose the Department of Computer Applications?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              We combine rigorous academic standards with practical industry experience to produce
              graduates who are ready to make an immediate impact in the technology sector.
            </p>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#4CC9BF]/10 flex items-center justify-center shrink-0">
                  <Award className="h-7 w-7 text-[#33AAA1]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Accredited Excellence</h3>
                  <p className="text-slate-600 leading-relaxed">
                    AACCUP Level III accredited program with ongoing pursuit of CHED Center of Excellence status.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#4CC9BF]/10 flex items-center justify-center shrink-0">
                  <Users className="h-7 w-7 text-[#33AAA1]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Expert Faculty</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Learn from experienced professionals with advanced degrees and active research portfolios.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#4CC9BF]/10 flex items-center justify-center shrink-0">
                  <Briefcase className="h-7 w-7 text-[#33AAA1]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Industry Connections</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Strong partnerships with leading tech companies for highly-capable internships and job placements.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#4CC9BF]/10 flex items-center justify-center shrink-0">
                  <FlaskConical className="h-7 w-7 text-[#33AAA1]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Research Culture</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Active inclusive research programs providing direct opportunities for students to participate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
              alt="Faculty member teaching students in a modern classroom"
              className="rounded-2xl shadow-xl w-full h-[600px] object-cover border border-slate-100"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-4xl font-black text-[#33AAA1]">25+</div>
              <div className="text-slate-600 font-bold uppercase tracking-wider mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Research */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research & Innovation</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Advancing knowledge through impactful research that addresses local industry needs and global technology trends.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {loadingResearch ? (
              <div className="col-span-3 text-center py-10 text-slate-500 animate-pulse bg-slate-100 rounded-xl">Loading research database...</div>
            ) : researchItems.length > 0 ? (
              researchItems.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 pr-4 line-clamp-2">{item.title}</h3>
                    {item.status && (
                      <span className="shrink-0 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#4CC9BF] mb-3">{item.lead_researcher_name ? `Dr. ${item.lead_researcher_name}` : 'Faculty Lead'}, Lead Researcher</p>
                  <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-4">{item.description}</p>
                  <Link to={`/research`} className="text-[#33AAA1] font-bold flex items-center hover:text-[#2d958d] mt-auto">
                    Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-10 text-slate-500 border-2 border-dashed border-slate-200 rounded-xl font-medium">No research projects currently available.</div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link to="/research" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-100 hover:border-slate-300 transition-all">
              Explore All Research
            </Link>
          </div>
        </div>
      </section>

      {/* 6. News & Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-3">
          {/* News */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">Latest News</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {loadingNews ? (
                <div className="col-span-3 text-center py-10 animate-pulse bg-slate-50 rounded-xl text-slate-500">Loading news articles...</div>
              ) : newsItems.length > 0 ? (
                newsItems.map((item) => (
                  <article key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group">
                    <div className="overflow-hidden">
                      <ImageWithFallback
                        src={item.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-sm font-medium text-slate-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.date)}
                      </div>
                      <span className="inline-block px-2.5 py-1 mb-3 text-[10px] font-bold tracking-widest text-[#33AAA1] uppercase bg-[#33AAA1]/10 rounded-sm w-fit">
                        {item.category || "News"}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-[#33AAA1] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-5 flex-1 line-clamp-3 leading-relaxed">
                        {item.summary}
                      </p>
                      <Link to="/news" className="text-[#33AAA1] font-bold inline-flex items-center hover:text-[#2d958d]">
                        Read full article <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-3 text-center py-10 border-2 border-dashed border-slate-100 rounded-xl text-slate-500">No news available.</div>
              )}
            </div>
            <Link to="/news" className="text-slate-600 mt-10 font-bold inline-flex items-center hover:text-[#33AAA1] hover:bg-slate-50 px-5 py-2.5 rounded-lg transition-colors border-slate-200 border">
              View All News <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Events Sidebar */}
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">Events</h2>
            </div>
            <div className="space-y-4">
              {loadingEvents ? (
                <div className="text-center py-10 animate-pulse bg-slate-50 rounded-xl text-slate-500">Loading events...</div>
              ) : eventsItems.length > 0 ? (
                eventsItems.slice(0, 5).map((event, index) => {
                  const eventDate = new Date(event.start_date || event.date);
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:border-[#33AAA1] hover:shadow-md transition-all group cursor-pointer block">
                      <div className="flex items-start gap-5">
                        <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center shrink-0 text-[#33AAA1] group-hover:bg-[#33AAA1] group-hover:text-white transition-colors">
                          <span className="text-xs font-bold uppercase tracking-widest">{eventDate.toLocaleString('default', { month: 'short' })}</span>
                          <span className="text-xl font-black leading-none mt-0.5">{eventDate.getDate()}</span>
                        </div>
                        <div>
                          {event.category && <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">{event.category}</span>}
                          <h4 className="font-bold text-slate-900 mb-1.5 line-clamp-2 leading-tight group-hover:text-[#33AAA1] transition-colors">{event.title}</h4>
                          <p className="text-xs text-slate-500 font-medium flex items-center">
                            {(event.location || event.time) && <span className="w-1.5 h-1.5 rounded-full bg-[#4CC9BF] mr-2"></span>}
                            {event.location || event.time || "TBA"}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-slate-500 border-2 border-dashed border-slate-200 rounded-xl font-medium">No upcoming events scheduled.</div>
              )}
            </div>
            <Link to="/news" className="text-slate-600 mt-8 font-bold inline-flex items-center hover:text-[#33AAA1] hover:bg-slate-50 px-5 py-2.5 rounded-lg transition-colors border-slate-200 border">
              View Event Calendar <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}