from django.db import models

class ResourceFile(models.Model):
    CATEGORY_CHOICES = [
        ('academic_form', 'Student Academic Form'),
        ('research_thesis', 'Research and Thesis'),
        ('admin_doc', 'Administrative Document'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    file = models.FileField(upload_to='resources/', blank=True, null=True)
    external_link = models.URLField(blank=True, help_text="Use this if the file is hosted externally (e.g. Google Drive)")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
