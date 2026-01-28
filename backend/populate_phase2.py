import os
import django
import urllib.request
from django.core.files.base import ContentFile
import ssl

# Handle SSL context for legacy environments or dev certificates
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from news.models import NewsItem, Event
from students.models import StudentAchievement

def download_image(url):
    try:
        # User-Agent headers are sometimes needed for download to work
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                return ContentFile(response.read())
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return None

def populate_news():
    print("Populating News...")
    news_data = [
        {
            "title": 'Graduation Ceremony 2026 - Celebrating Excellence',
            "date": '2026-01-15',
            "category": 'Event',
            "image_url": 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2ODk2NTAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
            "content": 'The Computer Applications Department proudly celebrates the achievements of 120 graduating students. This year\'s batch showed exceptional performance in IoT and Embedded Systems, with several students receiving awards for outstanding capstone projects.'
        },
        {
            "title": 'New State-of-the-Art IoT Laboratory Officially Opens',
            "date": '2026-01-10',
            "category": 'Facility',
            "image_url": 'https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBkZXZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkwNjQ5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
            "content": 'Our newly inaugurated IoT Laboratory features cutting-edge equipment including 50 development kits, advanced sensors, and cloud integration platforms. The facility will enhance hands-on learning experiences for students specializing in Internet of Things.'
        },
        {
            "title": 'ComApps Students Win National Hackathon Championship',
            "date": '2026-01-05',
            "category": 'Achievement',
            "image_url": 'https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njg5Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            "content": 'A team of four ComApps students developed an innovative smart farming solution that won first place at the National Tech Innovation Hackathon, competing against 50 teams from universities nationwide. The solution uses IoT sensors and machine learning for precision agriculture.'
        }
    ]

    for item in news_data:
        if NewsItem.objects.filter(title=item['title']).exists():
            continue
        print(f"Creating {item['title']}")
        news = NewsItem(
            title=item['title'],
            date=item['date'],
            category=item['category'],
            summary=item['content'][:100] + '...',
            content=item['content']
        )
        img_content = download_image(item['image_url'])
        if img_content:
            news.image.save(f"news_{item['date']}.jpg", img_content, save=True)
        news.save()

def populate_events():
    print("Populating Events...")
    events_data = [
        { 'title': 'Tech Talk: AI in IoT', 'date': '2026-02-05', 'time': '2:00 PM - 4:00 PM', 'venue': 'Main Auditorium' },
        { 'title': 'Student Research Symposium', 'date': '2026-02-15', 'time': '9:00 AM - 5:00 PM', 'venue': 'ComApps Building' },
        { 'title': 'Industry Job Fair', 'date': '2026-02-20', 'time': '10:00 AM - 4:00 PM', 'venue': 'University Gym' },
        { 'title': 'Embedded Systems Workshop', 'date': '2026-03-01', 'time': '1:00 PM - 5:00 PM', 'venue': 'Embedded Lab' },
        { 'title': 'ComApps Week 2026', 'date': '2026-03-10', 'time': 'All Day', 'venue': 'Various Locations' },
        { 'title': 'Hackathon: Smart Solutions', 'date': '2026-03-22', 'time': '24 Hours', 'venue': 'Innovation Hub' },
    ]

    for item in events_data:
        Event.objects.get_or_create(
            title=item['title'],
            defaults={
                'date': item['date'],
                'time': item['time'],
                'venue': item['venue']
            }
        )

def populate_achievements():
    print("Populating Achievements...")
    achievements_data = [
        { 'achievement': 'National Programming Competition - 1st Place', 'student': 'Carlos Martinez', 'date': '2025-12-01' },
        { 'achievement': 'Best IoT Innovation Award', 'student': 'Sarah Lee & Team', 'date': '2025-11-15' },
        { 'achievement': 'DOST Scholarship Recipient', 'student': 'Maria Santos', 'date': '2025-10-10' },
        { 'achievement': 'International Research Paper Published', 'student': 'Juan Dela Cruz', 'date': '2025-09-20' },
        { 'achievement': 'Best Capstone Project Award', 'student': 'Anna Garcia & Team', 'date': '2025-06-15' },
        { 'achievement': 'Embedded Systems Competition Winner', 'student': 'Roberto Tan', 'date': '2025-05-10' },
    ]

    for item in achievements_data:
        StudentAchievement.objects.get_or_create(
            achievement=item['achievement'],
            student_name=item['student'],
            defaults={'date': item['date']}
        )

if __name__ == '__main__':
    populate_news()
    populate_events()
    populate_achievements()
    print("Done!")
