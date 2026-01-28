import { motion } from "motion/react";
import { Wifi, Cloud, Shield, ArrowLeft, Target, Eye, CheckCircle, Lightbulb, Database, Radio } from "lucide-react";
import { Link } from "react-router-dom";

export function IoTTrack() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-700 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs/bsca" className="inline-flex items-center text-teal-300 hover:text-teal-200 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to BSCA Program
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mb-4"
          >
            <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mr-4">
              <Wifi className="w-8 h-8 text-teal-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Internet of Things (IoT) Track</h1>
          </motion.div>
          <p className="text-xl text-teal-100 max-w-3xl">
            Specializing in connecting physical devices to the internet for intelligent data collection, analysis, and automation.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Track Vision</h2>
              </div>
              <div className="prose prose-lg text-slate-600">
                <p className="text-lg leading-relaxed">
                  To be the premier IoT education hub in Mindanao, nurturing innovators who create intelligent, connected solutions that transform industries, improve quality of life, and contribute to the development of smart cities and sustainable communities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="IoT Network" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Smart Devices" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Track Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  The Internet of Things Track is dedicated to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Provide comprehensive training in IoT architecture, wireless communication protocols, and sensor network design.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Develop expertise in cloud computing platforms, data analytics, and machine learning for IoT applications.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Emphasize IoT security, privacy, and ethical considerations in connected device development.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Prepare graduates for careers in smart home automation, industrial IoT, healthcare, agriculture, and urban planning.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals and Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Track Goals & Objectives</h2>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our structured objectives ensure students develop comprehensive IoT expertise from device-level to cloud-based systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Goal 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">IoT Architecture & Protocols</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Understand the layered architecture of IoT systems from devices to cloud platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Master wireless communication protocols (MQTT, CoAP, LoRaWAN, Zigbee, BLE).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Design and implement scalable wireless sensor networks (WSN).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Configure edge computing and fog computing solutions for distributed IoT systems.</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cloud & Data Analytics</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Develop IoT applications using cloud platforms (AWS IoT, Azure IoT, Google Cloud IoT).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Implement data pipelines for real-time IoT data processing and storage.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Apply machine learning and AI techniques for predictive analytics on IoT data.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Create visualization dashboards and monitoring systems for IoT applications.</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">Security & Privacy</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Implement encryption, authentication, and secure communication in IoT devices.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Understand IoT security vulnerabilities and threat mitigation strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Apply privacy-preserving techniques in data collection and processing.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Comply with industry standards and regulations for IoT security (e.g., GDPR, ISO 27001).</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Development</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Design and deploy smart home automation systems with voice and mobile control.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Develop industrial IoT solutions for predictive maintenance and process optimization.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Create healthcare IoT applications for remote patient monitoring and diagnostics.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Implement agricultural IoT systems for precision farming and environmental monitoring.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Competencies Section */}
      <section className="py-16 bg-gradient-to-br from-teal-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Radio className="w-10 h-10 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Wireless Networks</h3>
              <p className="text-teal-100">
                Expertise in designing and implementing wireless sensor networks using various communication protocols and topologies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Cloud className="w-10 h-10 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Integration</h3>
              <p className="text-teal-100">
                Proficiency in connecting IoT devices to cloud platforms for scalable data storage, processing, and analytics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Database className="w-10 h-10 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Data-Driven Solutions</h3>
              <p className="text-teal-100">
                Skills in extracting insights from IoT data using analytics, visualization, and machine learning techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">IoT Application Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Smart Homes", description: "Automation, security, energy management" },
              { title: "Industrial IoT", description: "Predictive maintenance, asset tracking" },
              { title: "Healthcare", description: "Wearables, remote monitoring, telemedicine" },
              { title: "Agriculture", description: "Precision farming, soil monitoring" },
              { title: "Smart Cities", description: "Traffic management, waste optimization" },
              { title: "Energy", description: "Smart grids, renewable energy systems" },
              { title: "Transportation", description: "Fleet management, autonomous vehicles" },
              { title: "Retail", description: "Inventory tracking, customer analytics" }
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-sm text-slate-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Shape the Connected Future?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join the IoT track and become an innovator creating intelligent solutions that connect the physical and digital worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs/bsca" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#4CC9BF] hover:bg-[#33AAA1] transition-colors"
            >
              View Full Program
            </Link>
            <Link 
              to="/admissions/bsca" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4CC9BF] text-base font-medium rounded-lg text-[#4CC9BF] hover:bg-teal-50 transition-colors"
            >
              Admission Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
