import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, BookOpen, GraduationCap, Link as LinkIcon, ChevronDown, BarChart2 } from 'lucide-react';
import { fetchAllUnifiedPublications, UnifiedPublication, fetchResearchSettings } from '@/app/data/api';

export function PublicationsPage() {
  const [publications, setPublications] = useState<UnifiedPublication[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Scopus State
  const [scopusPubs, setScopusPubs] = useState(0);
  const [hIndex, setHIndex] = useState(0);

  // Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  
  // Extract distinct years for the dropdown automatically
  const availableYears = Array.from(new Set(publications.map(p => p.year).filter(y => y !== 'N/A'))).sort((a, b) => b.localeCompare(a));

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pubsData, settingsData] = await Promise.all([
          fetchAllUnifiedPublications(),
          fetchResearchSettings()
        ]);
        setPublications(pubsData);
        if (settingsData) {
          setScopusPubs(settingsData.scopus_publications || 0);
          setHIndex(settingsData.h_index_department || 0);
        }
      } catch (err) {
        console.error("Error loading publications hub:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filtered = publications.filter(pub => {
    const q = searchQuery.toLowerCase();
    const matchText = pub.title.toLowerCase().includes(q) || pub.authors.toLowerCase().includes(q) || pub.venue.toLowerCase().includes(q);
    const matchType = selectedType === 'All' || pub.type === selectedType;
    const matchYear = selectedYear === 'All' || pub.year === selectedYear;
    return matchText && matchType && matchYear;
  });

  const visiblePublications = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#0F172A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications Hub</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore the unified catalog of published research, conference presentations, and journals authored by both our faculty and student researchers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 flex items-center bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 w-full">
            <Search className="text-slate-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Search by title, author, or venue..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(5); // reset pagination on search
              }}
              className="bg-transparent w-full outline-none text-slate-700"
            />
          </div>
          
          <div className="relative w-full md:w-auto flex gap-4">
            <select
              value={selectedType}
              onChange={(e) => { setSelectedType(e.target.value); setVisibleCount(5); }}
              className="appearance-none bg-slate-50 border border-slate-100 px-6 py-3 pr-10 rounded-xl text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#4CC9BF] w-full md:w-48"
            >
              <option value="All">All Types</option>
              <option value="Journal">Journal</option>
              <option value="Conference">Conference</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              value={selectedYear}
              onChange={(e) => { setSelectedYear(e.target.value); setVisibleCount(5); }}
              className="appearance-none bg-slate-50 border border-slate-100 px-6 py-3 pr-10 rounded-xl text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#4CC9BF] w-full md:w-40"
            >
              <option value="All">All Years</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Scopus Statistics Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-[#4CC9BF]/20 to-teal-500/10 p-8 rounded-2xl border border-teal-100 flex items-center">
            <div className="p-4 bg-white rounded-full shadow-sm mr-6">
              <BookOpen className="w-8 h-8 text-[#33AAA1]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-1">Scopus Indexed</div>
              <div className="text-4xl font-bold text-slate-900">{scopusPubs}</div>
              <div className="text-slate-600 mt-1">Total recognized publications globally</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-8 rounded-2xl border border-indigo-100 flex items-center">
            <div className="p-4 bg-white rounded-full shadow-sm mr-6">
              <BarChart2 className="w-8 h-8 text-indigo-500" />
            </div>
            <div>
              <div className="text-sm font-semibold text-indigo-700 uppercase tracking-wider mb-1">Department Metric</div>
              <div className="text-4xl font-bold text-slate-900">{hIndex}</div>
              <div className="text-slate-600 mt-1">H-Index score establishing academic impact</div>
            </div>
          </div>
        </div>

        {/* Publication Feed */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            Detailed Index <span className="ml-3 px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">{filtered.length} found</span>
          </h2>
          
          {loading ? (
            <div className="py-20 text-center text-slate-500">Compiling unified publications...</div>
          ) : visiblePublications.length > 0 ? (
            <div className="space-y-6">
              {visiblePublications.map((pub, idx) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#4CC9BF]/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       {pub.type === 'Journal' ? 
                         <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg tracking-wide uppercase">Journal</span> :
                         <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-lg tracking-wide uppercase">Conference</span>
                       }
                       <span className="text-slate-400 font-semibold text-sm">{pub.year}</span>
                       <span className="text-slate-300">•</span>
                       <span className="flex items-center text-slate-500 text-xs font-semibold uppercase tracking-wider">
                         {pub.source === 'Faculty' ? <BookOpen className="w-3 h-3 mr-1"/> : <GraduationCap className="w-3 h-3 mr-1"/>}
                         {pub.source}
                       </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{pub.title}</h3>
                    <p className="text-[#33AAA1] font-medium text-sm mb-1">{pub.authors}</p>
                    <p className="text-slate-500 text-sm">{pub.venue}</p>
                  </div>
                  
                  {pub.link && (
                    <div className="md:border-l md:border-slate-100 md:pl-6">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-[#4CC9BF]/10 text-slate-600 hover:text-[#4CC9BF] transition-colors">
                        <LinkIcon className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
              
              {visibleCount < filtered.length && (
                <div className="text-center pt-8">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 5)}
                    className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-[#4CC9BF] transition-colors"
                  >
                    See More Publications
                  </button>
                </div>
              )}
            </div>
          ) : (
             <div className="py-20 text-center bg-white rounded-2xl border border-slate-100">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">No Publications Found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
