import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Users,
  Cpu,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-br from-[#236c65] via-[#288179] to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  Welcome to
                  <br></br>
                  <span className="text-[#77D6CE]">
                    {" "}
                    Computer Applications Department
                  </span>
                </h1>
                <p className="text-base text-[#77D6CE] mb-4 leading-relaxed">
                  Offering BS and MS in Computer Applications
                  with specializations in IoT and Embedded
                  Systems at Mindanao State University - Iligan
                  Institute of Technology's premier Computer
                  Applications program.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/programs-admissions"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-[#236c65] rounded-lg font-semibold hover:bg-[#e6f7f6] transition-all shadow-xl hover:shadow-2xl"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-5 py-2.5 bg-[#33AAA1]/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-[#33AAA1]/30 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Slider {...carouselSettings}>
                  <div>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJufGVufDF8fHx8MTc2ODk4ODg2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="MSU Campus"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#236c65]/50 to-transparent" />
                  </div>
                  <div>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkwNjQ5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="IoT Technology"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#236c65]/50 to-transparent" />
                  </div>
                  <div>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2ODk2NTAyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Graduation Ceremony"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#236c65]/50 to-transparent" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">
              Latest News
            </h2>
            <Link
              to="/news"
              className="text-[#33AAA1] font-semibold hover:text-[#2d958d] inline-flex items-center"
            >
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2ODk2NTAyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  January 15, 2026
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Commencement Exercises 2026
                </h3>
                <p className="text-slate-600 mb-4">
                  Celebrating the achievements of our graduating
                  class with outstanding performances in IoT and
                  Embedded Systems.
                </p>
                <Link
                  to="/news"
                  className="text-[#33AAA1] font-semibold hover:text-[#2d958d] inline-flex items-center"
                >
                  Read more{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkwNjQ5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="IoT Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  January 10, 2026
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  New IoT Lab Opens
                </h3>
                <p className="text-slate-600 mb-4">
                  State-of-the-art Internet of Things laboratory
                  equipped with latest sensors and development
                  platforms.
                </p>
                <Link
                  to="/news"
                  className="text-[#4CC9BF] font-semibold hover:text-[#33AAA1] inline-flex items-center"
                >
                  Read more{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHByb2plY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2OTA2NDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research Competition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  January 5, 2026
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Students Win National Tech Competition
                </h3>
                <p className="text-slate-600 mb-4">
                  Department students secure first place at the National Embedded Systems Competition with innovative smart home project.
                </p>
                <Link
                  to="/news"
                  className="text-[#33AAA1] font-semibold hover:text-[#2d958d] inline-flex items-center"
                >
                  Read more{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Academic Programs</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">
               Explore the pathways we offer for your future career in technology.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* BSCA Track 1 */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#4CC9BF]/10 rounded-lg flex items-center justify-center text-[#4CC9BF] mb-4 group-hover:bg-[#4CC9BF] group-hover:text-white transition-colors">
                   <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">BSCA: Embedded Systems</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Focuses on the design and development of specialized computer systems integrated into larger devices.
                </p>
                <Link to="/programs-admissions" className="text-sm font-semibold text-[#33AAA1] flex items-center group-hover:text-[#2d958d]">
                   Learn more <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
             </div>

             {/* BSCA Track 2 */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#4CC9BF]/10 rounded-lg flex items-center justify-center text-[#4CC9BF] mb-4 group-hover:bg-[#4CC9BF] group-hover:text-white transition-colors">
                   <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">BSCA: Internet of Things (IoT)</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Specializes in connecting physical devices to the internet to collect and exchange data for smart solutions.
                </p>
                <Link to="/programs-admissions" className="text-sm font-semibold text-[#33AAA1] flex items-center group-hover:text-[#2d958d]">
                   Learn more <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
             </div>

             {/* MSCA */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#4CC9BF]/10 rounded-lg flex items-center justify-center text-[#4CC9BF] mb-4 group-hover:bg-[#4CC9BF] group-hover:text-white transition-colors">
                   <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">MS Computer Applications</h3>
                <p className="text-sm text-slate-600 mb-4">
                   Advanced graduate studies focusing on research, IT management, and emerging technologies.
                </p>
                <Link to="/programs-admissions" className="text-sm font-semibold text-[#33AAA1] flex items-center group-hover:text-[#2d958d]">
                   Learn more <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
             </div>

             {/* BS ECT */}
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                   <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">BS ECT (Legacy)</h3>
                <p className="text-sm text-slate-600 mb-4">
                   Our foundational program in electronics technology. Note: This program is closed for new admissions.
                </p>
                <Link to="/programs-admissions" className="text-sm font-semibold text-slate-500 flex items-center group-hover:text-slate-700">
                   View details <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}