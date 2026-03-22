import os
import django
import sys
from django.core.files.base import ContentFile
import urllib.request

# Setup Django environment
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from research.models import Collaborator

def populate():
    # Clear existing
    Collaborator.objects.all().delete()
    print("Deleted all existing collaborators...")

    partners = [
        {
            "name": "Universiti Teknologi Malaysia",
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Universiti_Teknologi_Malaysia_logo.svg/1200px-Universiti_Teknologi_Malaysia_logo.svg.png",
            "website": "https://www.utm.my/",
            "desc": "A leading innovation-driven entrepreneurial research university in engineering science and technology located in Kuala Lumpur, Malaysia."
        },
        {
            "name": "RT-Thread",
            "url": "https://dummyimage.com/200x200/4CC9BF/ffffff&text=RT-Thread",
            "website": "https://www.rt-thread.io/",
            "desc": "An open-source, real-time operating system (RTOS) designed for IoT and embedded devices. Our partnership enables cutting-edge OS research."
        },
        {
            "name": "DICT Region 10",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Department_of_Information_and_Communications_Technology_%28DICT%29.svg/2048px-Department_of_Information_and_Communications_Technology_%28DICT%29.svg.png",
            "website": "https://dict.gov.ph/",
            "desc": "The primary policy, planning, coordinating, implementing, and administrative entity of the Executive Branch of the government for ICT development agendas."
        }
    ]

    for i, data in enumerate(partners):
        print(f"Downloading {data['name']}...")
        req = urllib.request.Request(data['url'], headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        result = urllib.request.urlopen(req)
        collab = Collaborator(
            name=data['name'],
            website=data['website'],
            description=data['desc'],
            order=i
        )
        collab.logo.save(f"logo_{i}.png", ContentFile(result.read()), save=True)
        print(f"Added {data['name']}")

if __name__ == '__main__':
    populate()
    print("Done populating Collaborator database!")
