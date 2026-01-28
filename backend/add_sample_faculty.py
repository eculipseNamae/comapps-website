import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from faculty.models import FacultyMember

def create_sample_faculty():
    # Define sample data
    sample_data = {
        "id": "example-reference",
        "name": "Dr. Example Reference",
        "position": "Professor",
        "email": "example.reference@university.edu",
        "bio": "This is a sample faculty member to demonstrate the data format. You can delete this user after checking the fields.",
        "research_interests": [
            "Artificial Intelligence",
            "Data Science",
            "Machine Learning"
        ],
        "networks": {
            "linkedin": "https://www.linkedin.com/in/example",
            "googleScholar": "https://scholar.google.com/citations?user=example",
            "researchgate": "https://www.researchgate.net/profile/Example",
            "orcid": "https://orcid.org/0000-0000-0000-0000"
        }
    }

    # Create or update the faculty member
    member, created = FacultyMember.objects.update_or_create(
        id=sample_data['id'],
        defaults=sample_data
    )

    if created:
        print(f"Successfully created sample faculty: {member.name}")
    else:
        print(f"Updated existing sample faculty: {member.name}")

if __name__ == "__main__":
    create_sample_faculty()
