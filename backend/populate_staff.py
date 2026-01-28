import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from faculty.models import FacultyMember

staff_data = [
    {
        "id": "odvina-cendy",
        "name": "Odvina, Cendy Lou",
        "position": "Department Secretary",
        "email": "cendylou.odvina@g.msuiit.edu.ph",
        "bio": "Department Secretary",
        "profile_image": None # Placeholder will be used by frontend if null
    }
]

for staff in staff_data:
    obj, created = FacultyMember.objects.get_or_create(
        id=staff['id'],
        defaults={
            "name": staff['name'],
            "position": staff['position'],
            "email": staff['email'],
            "bio": staff['bio']
        }
    )
    if created:
        print(f"Created staff: {staff['name']}")
    else:
        print(f"Staff already exists: {staff['name']}")
