import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from extensions.models import ExtensionProgram

def populate_extensions():
    print("Populating Extension Programs...")
    ExtensionProgram.objects.all().delete()

    programs = [
        # Ongoing
        {
            "title": "Digital Literacy Training for Rural Communities",
            "status": "Ongoing",
            "category": "Technology Education",
            "date": "Ongoing • Quarterly Sessions",
            "description": "Providing free basic computer literacy and internet safety training to underserved communities in Lanao del Norte.",
            "beneficiaries_count": 500,
            "beneficiaries_label": "Beneficiaries",
            "municipality": "Lanao del Norte (12 Barangays)",
            "partner_organization": "Department of ICT",
            "image_url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        },
        {
            "title": "IoT for Agriculture Workshop Series",
            "status": "Ongoing",
            "category": "Innovation",
            "date": "Ongoing • Monthly Sessions",
            "description": "Training local farmers and agricultural workers on Internet of Things (IoT) applications in smart farming.",
            "beneficiaries_count": 200,
            "beneficiaries_label": "Farmers Trained",
            "municipality": "8 Municipalities",
            "partner_organization": "Dept of Agriculture"
        },
        {
            "title": "Technology Integration for Teachers",
            "status": "Ongoing",
            "category": "Skills Development",
            "date": "Ongoing • Bi-Annual",
            "description": "Comprehensive training program for public school teachers in Northern Mindanao on integrating technology into classroom instruction.",
            "beneficiaries_count": 350,
            "beneficiaries_label": "Teachers",
            "municipality": "25 Schools",
            "partner_organization": "DepEd"
        },
        # Completed
        {
            "title": "Youth Coding Bootcamp 2025",
            "status": "Completed",
            "category": "Skills Development",
            "date": "January 2025",
            "description": "Week-long intensive coding bootcamp for high school students, introducing Python programming and basic web development.",
            "beneficiaries_count": 120,
            "beneficiaries_label": "Students",
            "municipality": "Iligan City",
            "partner_organization": "City High Schools"
        },
        {
            "title": "Women in Tech Workshop Series",
            "status": "Completed",
            "category": "Community Impact",
            "date": "October 2024",
            "description": "Empowering women through technology education with workshops on programming, robotics, and entrepreneurship.",
            "beneficiaries_count": 80,
            "beneficiaries_label": "Women",
            "municipality": "Online/Hybrid",
            "partner_organization": "Women Who Code"
        },
        {
            "title": "Senior Citizens Digital Workshop",
            "status": "Completed",
            "category": "Community Impact",
            "date": "September 2024",
            "description": "Teaching senior citizens basic smartphone use, social media safety, and online government services.",
            "beneficiaries_count": 60,
            "beneficiaries_label": "Seniors",
            "municipality": "Iligan City",
            "partner_organization": "Office of Senior Citizens"
        },
        # Upcoming
        {
            "title": "AI & Machine Learning Workshop",
            "status": "Upcoming",
            "category": "Innovation",
            "date": "March 2026",
            "description": "Introduction to artificial intelligence and machine learning for community members interested in emerging technologies.",
            "beneficiaries_count": 100,
            "beneficiaries_label": "Target Participants",
            "municipality": "Campus Venue",
            "partner_organization": ""
        },
        {
            "title": "Smart City Technology Symposium",
            "status": "Upcoming",
            "category": "Innovation",
            "date": "April 2026",
            "description": "Educational symposium on smart city technologies for local government officials and urban planners.",
            "beneficiaries_count": 50,
            "beneficiaries_label": "LGU Officials",
            "municipality": "City Hall",
            "partner_organization": "City Government"
        },
        {
            "title": "Cybersecurity Awareness Campaign",
            "status": "Upcoming",
            "category": "Community Impact",
            "date": "May 2026",
            "description": "Region-wide campaign to educate communities about online security, privacy protection, and safe internet practices.",
            "beneficiaries_count": 1000,
            "beneficiaries_label": "General Public",
            "municipality": "Region X",
            "partner_organization": "PNP Cybercrime Unit"
        }
    ]

    for p in programs:
        # Clean up image url to not be saved as file, just a demo
        img_url = p.pop('image_url', None)
        ExtensionProgram.objects.create(**p)
        print(f"Created: {p['title']}")

if __name__ == '__main__':
    populate_extensions()
