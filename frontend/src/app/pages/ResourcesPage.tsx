import { motion } from "motion/react";
import { FileText, Download, FileCheck, FlaskConical, Search, File } from "lucide-react";
import { useState, useEffect } from "react";
import { resourcesAPI } from "../../services/api";

export function Resources() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await resourcesAPI.getFiles();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFiles();
  }, []);

  const filteredFiles = files.filter(file =>
    file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (file.description && file.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return FileCheck;
      case 'Research': return FlaskConical;
      case 'Administrative': return FileText;
      default: return File;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'Academic': return "Student Academic Forms";
      case 'Research': return "Research & Thesis";
      case 'Administrative': return "Administrative Documents";
      default: return "Other Resources";
    }
  };

  // Group files by category
  const groupedFiles = filteredFiles.reduce((acc, file) => {
    const category = file.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(file);
    return acc;
  }, {} as Record<string, any[]>);

  // Define category order
  const categoryOrder = ['Academic', 'Research', 'Administrative', 'Other'];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder.map((catKey, idx) => {
            const categoryFiles = groupedFiles[catKey];
            if (!categoryFiles || categoryFiles.length === 0) return null;

            const Icon = getCategoryIcon(catKey);
            const title = getCategoryTitle(catKey);

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-[#33AAA1]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-bold text-slate-900">{title}</h2>
                </div>
                <div className="p-2">
                  {categoryFiles.map((form: any, fIdx: number) => (
                    <a
                      key={form.id || fIdx}
                      href={form.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <FileText className="w-5 h-5 text-slate-400 group-hover:text-[#4CC9BF] shrink-0" />
                        <span className="text-sm text-slate-700 font-medium truncate">{form.title}</span>
                      </div>
                      <div className="flex items-center space-x-3 pl-2">
                        {/* Size is not available in standard API unless calculated, skipping or showing type */}
                        {/* <span className="text-xs text-slate-400 hidden sm:inline-block">PDF</span> */}
                        <Download className="w-4 h-4 text-slate-300 group-hover:text-[#33AAA1]" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
          {/* Handle 'Other' categories that are not in the predefined order */}
          {Object.keys(groupedFiles).filter(k => !categoryOrder.includes(k)).map((catKey, idx) => {
            const categoryFiles = groupedFiles[catKey];
            const Icon = getCategoryIcon(catKey);
            const title = catKey; // Use raw category for 'Other' types

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (categoryOrder.length + idx) * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-[#33AAA1]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-bold text-slate-900">{title}</h2>
                </div>
                <div className="p-2">
                  {categoryFiles.map((form: any, fIdx: number) => (
                    <a
                      key={form.id || fIdx}
                      href={form.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <FileText className="w-5 h-5 text-slate-400 group-hover:text-[#4CC9BF] shrink-0" />
                        <span className="text-sm text-slate-700 font-medium truncate">{form.title}</span>
                      </div>
                      <div className="flex items-center space-x-3 pl-2">
                        <Download className="w-4 h-4 text-slate-300 group-hover:text-[#33AAA1]" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
