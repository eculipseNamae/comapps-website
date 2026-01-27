import { Calendar, Award, Users, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { newsAPI, eventsAPI } from '@/services/api';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [newsData, eventsData] = await Promise.all([
          newsAPI.getAll(),
          eventsAPI.getAll()
        ]);
        setNews(Array.isArray(newsData) ? newsData : newsData.results || []);
        setEvents(Array.isArray(eventsData) ? eventsData : eventsData.results || []);
        setError(null);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError('Failed to load news and events.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">News and Events</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Stay updated with the latest announcements, events, and achievements from the Computer Applications Department.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Latest Announcements</h2>
          {loading && <p className="text-center text-slate-600">Loading news...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          <div className="space-y-8">
            {news.map((newsItem) => (
              <article key={newsItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <ImageWithFallback
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-sm font-semibold rounded-full">
                        {newsItem.category.charAt(0).toUpperCase() + newsItem.category.slice(1)}
                      </span>
                      <span className="text-slate-500 text-sm">{new Date(newsItem.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{newsItem.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{newsItem.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#4CC9BF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{event.title}</h3>
                    <div className="text-sm text-[#4CC9BF]">{new Date(event.date).toLocaleDateString()}</div>
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

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2ODk2NTAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkwNjQ5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njg5Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2OTA2NDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1763372278600-fd0b0997a7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBjaXJjdWl0c3xlbnwxfHx8fDE3NjkwNjQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJufGVufDF8fHx8MTc2ODk4ODg2OXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2OTA2NDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njg5Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-square">
                <ImageWithFallback
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#33AAA1]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-white" />
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
            {[
              { achievement: 'National Programming Competition - 1st Place', student: 'Carlos Martinez', date: 'December 2025' },
              { achievement: 'Best IoT Innovation Award', student: 'Sarah Lee & Team', date: 'November 2025' },
              { achievement: 'DOST Scholarship Recipient', student: 'Maria Santos', date: 'October 2025' },
              { achievement: 'International Research Paper Published', student: 'Juan Dela Cruz', date: 'September 2025' },
              { achievement: 'Best Capstone Project Award', student: 'Anna Garcia & Team', date: 'June 2025' },
              { achievement: 'Embedded Systems Competition Winner', student: 'Roberto Tan', date: 'May 2025' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <Award className="w-10 h-10 text-[#4CC9BF] mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.achievement}</h3>
                <div className="text-sm text-[#4CC9BF] mb-1">{item.student}</div>
                <div className="text-xs text-slate-500">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}