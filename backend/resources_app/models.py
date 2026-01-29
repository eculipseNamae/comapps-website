from django.db import models
from .validators import validate_file_extension

class Resource(models.Model):
    CATEGORY_CHOICES = [
        ('Student Academic Forms', 'Student Academic Forms'),
        ('Research & Thesis', 'Research & Thesis'),
        ('Administrative Documents', 'Administrative Documents'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='Student Academic Forms')
    description = models.TextField(blank=True, help_text="Optional description of the document")
    file = models.FileField(upload_to='resources/', validators=[validate_file_extension])
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    # Optional manual override for size label if needed, otherwise frontend can guess or we calculate
    # But backend calculation is better
    
    class Meta:
        ordering = ['category', 'title']

    def __str__(self):
        return self.title

    @property
    def file_size(self):
        try:
            size_in_bytes = self.file.size
            if size_in_bytes < 1024:
                return f"{size_in_bytes} bytes"
            elif size_in_bytes < 1024 * 1024:
                return f"{size_in_bytes / 1024:.1f} KB"
            else:
                return f"{size_in_bytes / (1024 * 1024):.1f} MB"
        except:
            return "Unknown"
