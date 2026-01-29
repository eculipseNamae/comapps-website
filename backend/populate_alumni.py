import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from students.models import Alumni

alumni_data = [
    # 2023 Grads (Mixed)
    {
        "name": "Carlos Miguel Santos",
        "year": 2023,
        "track": "Embedded Systems",
        "program_type": "Undergraduate",
        "awards": "Magna Cum Laude, Best Thesis Award",
        "thesis": "Real-Time Object Detection for Autonomous Vehicles Using Edge Computing",
        "presentation": "IEEE International Conference on Embedded Systems 2023"
    },
    {
        "name": "Maria Isabella Reyes",
        "year": 2023,
        "track": "IoT",
        "program_type": "Undergraduate",
        "awards": "Cum Laude, Outstanding Research Award",
        "thesis": "Smart Energy Management System for Sustainable Buildings",
        "presentation": "ASEAN IoT Innovation Summit 2023"
    },
    {
        "name": "Dr. Sarah Johnson",
        "year": 2023,
        "track": "", # No track for Grad
        "program_type": "Graduate",
        "awards": "Best Dissertation",
        "thesis": "Advanced Neural Architectures for Medical Imaging Analysis",
        "presentation": "International Conference on Medical AI 2023"
    },

    # 2022 Grads
    {
        "name": "Angela Grace Fernandez",
        "year": 2022,
        "track": "IoT",
        "program_type": "Undergraduate",
        "awards": "Summa Cum Laude, University Research Excellence Award",
        "thesis": "Cloud-Based Predictive Maintenance System for Industrial IoT Applications",
        "presentation": "International Conference on Industrial IoT, Singapore 2022"
    },
    {
        "name": "Robert Chen",
        "year": 2022,
        "track": "",
        "program_type": "Graduate",
        "awards": "Academic Excellence Award",
        "thesis": "Scalable Distributed Systems for Big Data Processing",
        "presentation": "Big Data World Congress 2022"
    },
    {
        "name": "Rafael James Cruz",
        "year": 2022,
        "track": "Embedded Systems",
        "program_type": "Undergraduate",
        "awards": "Magna Cum Laude, Best Capstone Project",
        "thesis": "Low-Power Wireless Sensor Network for Environmental Monitoring",
        "presentation": "Asia-Pacific Wireless Communications Symposium 2022"
    }
]

print("Populating Alumni...")
Alumni.objects.all().delete()  # Clear existing to avoid duplicates

for data in alumni_data:
    alumni = Alumni.objects.create(**data)
    print(f"Created alumni: {alumni.name} ({alumni.year} - {alumni.program_type})")

print("Alumni populated successfully!")
