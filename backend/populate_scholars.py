import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from students.models import AcademicScholar

scholars = {
    "1st Year": [
        {"name": "John Michael Cruz", "gpa": 1.00},
        {"name": "Angela Mae Santos", "gpa": 1.05},
        {"name": "Patricia Reyes", "gpa": 1.18},
        {"name": "Mark Anthony Dela Cruz", "gpa": 1.22},
        {"name": "Clarissa Joy Gonzales", "gpa": 1.25},
        {"name": "Joshua David Ramos", "gpa": 1.35},
        {"name": "Maria Isabelle Lopez", "gpa": 1.38},
        {"name": "Kenneth Paul Torres", "gpa": 1.42},
        {"name": "Stephanie Ann Garcia", "gpa": 1.45}
    ],
    "2nd Year": [
        {"name": "Alexandra Grace Lim", "gpa": 1.02},
        {"name": "Francis Miguel Tan", "gpa": 1.15},
        {"name": "Isabella Marie Cruz", "gpa": 1.20},
        {"name": "Daniel Joseph Aquino", "gpa": 1.28},
        {"name": "Samantha Rose Rivera", "gpa": 1.32},
        {"name": "Gabriel Antonio Santos", "gpa": 1.36},
        {"name": "Christine Mae Villanueva", "gpa": 1.40},
        {"name": "Bryan Miguel Flores", "gpa": 1.48}
    ],
    "3rd Year": [
        {"name": "Nicole Patricia Fernandez", "gpa": 1.00},
        {"name": "Christian James Mendoza", "gpa": 1.12},
        {"name": "Angelica Joy Bautista", "gpa": 1.25},
        {"name": "Marcus Julius Santiago", "gpa": 1.30},
        {"name": "Diana Rose Manalo", "gpa": 1.38},
        {"name": "Rafael James Reyes", "gpa": 1.45},
        {"name": "Kathleen Marie Castro", "gpa": 1.50}
    ],
    "4th Year": [
        {"name": "Vincent Carl Rodriguez", "gpa": 1.15},
        {"name": "Michelle Anne Gomez", "gpa": 1.22},
        {"name": "Adrian Miguel Torres", "gpa": 1.32},
        {"name": "Jasmine Claire Navarro", "gpa": 1.40},
        {"name": "Patrick James Diaz", "gpa": 1.48}
    ]
}

print("Populating Academic Scholars...")
AcademicScholar.objects.all().delete()  # Clear existing to avoid duplicates

for year, students in scholars.items():
    for student in students:
        scholar = AcademicScholar.objects.create(
            name=student['name'],
            gpa=student['gpa'],
            year_level=year
        )
        print(f"Created scholar: {scholar.name} ({year} - GPA: {scholar.gpa})")

print("Academic Scholars populated successfully!")
