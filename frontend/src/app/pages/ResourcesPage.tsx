import { motion } from "motion/react";
import { FileText, Download, FileCheck, FlaskConical, Search } from "lucide-react";

export function Resources() {
  const formCategories = [
    {
      title: "Student Academic Forms",
      icon: FileCheck,
      forms: [
        { name: "Incomplete (INC) Grade Completion Form", size: "125 KB" },
        { name: "Leave of Absence Application", size: "85 KB" },
        { name: "Adding/Dropping of Subjects Form", size: "110 KB" },
        { name: "Shift of Program Application", size: "150 KB" },
        { name: "Request for Overload Form", size: "95 KB" }
      ]
    },
    {
      title: "Research & Thesis",
      icon: FlaskConical,
      forms: [
        { name: "Thesis Proposal Defense Application", size: "200 KB" },
        { name: "Research Adviser Acceptance Form", size: "75 KB" },
        { name: "Research Ethics Clearance Form", size: "320 KB" },
        { name: "Final Defense Schedule Request", size: "90 KB" }
      ]
    },
    {
      title: "Administrative Documents",
      icon: FileText,
      forms: [
        { name: "Student Handbook 2025", size: "2.5 MB" },
        { name: "Department Laboratory Guidelines", size: "1.2 MB" },
        { name: "Curriculum Checklist (BS CA)", size: "450 KB" },
        { name: "Curriculum Checklist (MS CA)", size: "420 KB" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-teal-100 text-[#33AAA1] font-semibold rounded-full text-sm mb-4"
          >
            Downloads & Documents
          </motion.div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Department Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access important forms, templates, and guidelines for your academic journey at the Computer Applications Department.
          </p>
          
          <div className="mt-8 max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for forms..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-[#33AAA1]">
                  <category.icon className="w-6 h-6" />
                </div>
                <h2 className="font-bold text-slate-900">{category.title}</h2>
              </div>
              <div className="p-2">
                {category.forms.map((form, fIdx) => (
                  <div 
                    key={fIdx} 
                    className="group flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <FileText className="w-5 h-5 text-slate-400 group-hover:text-[#4CC9BF] shrink-0" />
                      <span className="text-sm text-slate-700 font-medium truncate">{form.name}</span>
                    </div>
                    <div className="flex items-center space-x-3 pl-2">
                      <span className="text-xs text-slate-400 hidden sm:inline-block">{form.size}</span>
                      <Download className="w-4 h-4 text-slate-300 group-hover:text-[#33AAA1]" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-[#33AAA1] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
             <p className="mb-6 max-w-xl mx-auto opacity-90">
               If you need a specific document that isn't listed here, please contact the department office directly.
             </p>
             <button className="px-6 py-3 bg-white text-[#33AAA1] font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
               Contact Office
             </button>
           </div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#4CC9BF] rounded-full opacity-50 blur-2xl"></div>
           <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#4CC9BF] rounded-full opacity-50 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}
