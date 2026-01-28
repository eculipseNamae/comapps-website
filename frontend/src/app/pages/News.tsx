import { Calendar, Award, Users, Image as ImageIcon, ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { fetchNews, fetchEvents, fetchStudentAchievements } from '@/app/data/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function News() {
  // News State
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [newsPage, setNewsPage] = useState(1);
  const [hasMoreNews, setHasMoreNews] = useState(true);

  // Events State
  const [events, setEvents] = useState<any[]>([]);

  // Achievements State
  const [achievements, setAchievements] = useState<any[]>([]);
  const [achievementsPage, setAchievementsPage] = useState(1);
  const [hasMoreAchievements, setHasMoreAchievements] = useState(true);

  useEffect(() => {
    loadNews(1);
    loadEvents();
    loadAchievements(1);
  }, []);

  const loadNews = (page: number) => {
    fetchNews(page).then(data => {
      if (page === 1) {
        setNewsItems(data.results);
      } else {
        setNewsItems(prev => [...prev, ...data.results]);
      }
      setHasMoreNews(!!data.next);
      setNewsPage(page);
    });
  };

  const loadEvents = () => {
    fetchEvents().then(data => setEvents(data));
  };

  const loadAchievements = (page: number) => {
    fetchStudentAchievements(page).then(data => {
      if (page === 1) {
        setAchievements(data.results);
      } else {
        setAchievements(prev => [...prev, ...data.results]);
      }
      setHasMoreAchievements(!!data.next);
      setAchievementsPage(page);
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay updated with the latest happenings, research breakthroughs, and student achievements at the Department of Computer Applications.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Latest Announcements</h2>
          <div className="space-y-8">
            {newsItems.map((news, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-sm font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-slate-500 text-sm">{formatDate(news.date)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{news.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{news.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {hasMoreNews && (
            <div className="text-center mt-12">
              <button
                onClick={() => loadNews(newsPage + 1)}
                className="inline-flex items-center px-6 py-3 bg-[#4CC9BF] text-white font-semibold rounded-lg hover:bg-[#33AAA1] transition-all"
              >
                More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#4CC9BF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{event.title}</h3>
                    <div className="text-sm text-[#4CC9BF]">{formatDate(event.date)}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Student Achievements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Student Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <Award className="w-10 h-10 text-[#4CC9BF] mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.achievement}</h3>
                <div className="text-sm text-[#4CC9BF] mb-1">{item.student_name}</div>
                <div className="text-xs text-slate-500">{formatDate(item.date)}</div>
              </div>
            ))}
          </div>
          {hasMoreAchievements && (
            <div className="text-center mt-12">
              <button
                onClick={() => loadAchievements(achievementsPage + 1)}
                className="inline-flex items-center px-6 py-3 bg-[#4CC9BF] text-white font-semibold rounded-lg hover:bg-[#33AAA1] transition-all"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}