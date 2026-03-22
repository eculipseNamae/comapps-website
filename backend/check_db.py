import os
import sys
import django

sys.path.append('c:\\Users\\Lenovo\\Desktop\\comapps-website\\backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from students.models import StudentProject
from faculty.models import FacultyMember, FacultyResearchProject

print("Student Publications count:")
for p in StudentProject.objects.all():
    print(f"- {p.title}: {p.publications.count()} pubs, {p.presentations.count()} pres, Awards: {repr(p.awards)}")

print("\nFaculty count:", FacultyMember.objects.count())
for f in FacultyMember.objects.all():
    print(f"- {f.name}: {f.publications.count()} pubs")

print("\nFaculty Research count:", FacultyResearchProject.objects.count())
