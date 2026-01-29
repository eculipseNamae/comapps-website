import os
import django
from django.core.files.base import ContentFile

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from resources_app.models import Resource

def populate_resources():
    print("Populating Resources...")
    Resource.objects.all().delete()

    resources = [
        # Student Academic Forms
        {"title": "Incomplete (INC) Grade Completion Form", "category": "Student Academic Forms"},
        {"title": "Leave of Absence Application", "category": "Student Academic Forms"},
        {"title": "Adding/Dropping of Subjects Form", "category": "Student Academic Forms"},
        {"title": "Shift of Program Application", "category": "Student Academic Forms"},
        {"title": "Request for Overload Form", "category": "Student Academic Forms"},
        
        # Research & Thesis
        {"title": "Thesis Proposal Defense Application", "category": "Research & Thesis"},
        {"title": "Research Adviser Acceptance Form", "category": "Research & Thesis"},
        {"title": "Research Ethics Clearance Form", "category": "Research & Thesis"},
        {"title": "Final Defense Schedule Request", "category": "Research & Thesis"},
        
        # Administrative Documents
        {"title": "Student Handbook 2025", "category": "Administrative Documents"},
        {"title": "Department Laboratory Guidelines", "category": "Administrative Documents"},
        {"title": "Curriculum Checklist (BS CA)", "category": "Administrative Documents"},
        {"title": "Curriculum Checklist (MS CA)", "category": "Administrative Documents"},
    ]

    # Create a dummy PDF content
    dummy_pdf = b"%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 500 800] >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n"

    for r in resources:
        res = Resource(
            title=r['title'],
            category=r['category'],
            description=f"Standard form for {r['title']}"
        )
        res.file.save(f"{r['title'].replace(' ', '_').lower()}.pdf", ContentFile(dummy_pdf))
        res.save()
        print(f"Created: {r['title']}")

if __name__ == '__main__':
    populate_resources()
