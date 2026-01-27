import { Server, Cpu, BookOpen, Wifi } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Facilities() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">
            Facilities and Resources
          </h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            State-of-the-art laboratories and resources to
            support your learning journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Computer Laboratories
              </h2>
              <div className="space-y-6">
                <div className="bg-[#4CC9BF]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    IoT Lab
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Equipped with latest sensors, development
                    boards, and IoT platforms including Arduino,
                    Raspberry Pi, and ESP32 modules.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        40 workstations with high-speed internet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Complete sensor kits and actuators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>Cloud integration platforms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#4CC9BF]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Embedded Systems Lab
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Dedicated space for embedded programming
                    with professional development tools and
                    hardware interfaces.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>ARM Cortex development boards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Oscilloscopes and logic analyzers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        JTAG debuggers and programmers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2OTA2NDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Computer Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Server,
                title: "High-Performance Servers",
                desc: "24/7 access to cloud servers for testing and deployment",
              },
              {
                icon: Cpu,
                title: "Latest Hardware",
                desc: "Cutting-edge microcontrollers and development platforms",
              },
              {
                icon: BookOpen,
                title: "Digital Library",
                desc: "Extensive collection of technical journals and e-books",
              },
              {
                icon: Wifi,
                title: "Campus WiFi",
                desc: "High-speed internet connectivity throughout campus",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl text-center"
              >
                <item.icon className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Software & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Development IDEs",
                items: [
                  "Visual Studio Code",
                  "Arduino IDE",
                  "Eclipse",
                  "Keil MDK",
                  "MPLAB X",
                ],
              },
              {
                category: "Design Tools",
                items: [
                  "Figma",
                  "Adobe Creative Suite",
                  "Proteus",
                  "KiCad",
                  "Fritzing",
                ],
              },
              {
                category: "Platforms & Frameworks",
                items: [
                  "Node.js",
                  "Python",
                  "React",
                  "Docker",
                  "AWS IoT",
                ],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-700"
                    >
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}