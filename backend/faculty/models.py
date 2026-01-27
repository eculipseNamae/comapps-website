from django.db import models


class Faculty(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)  # Assistant Professor, Professor, etc.
    email = models.EmailField()
    research_interests = models.JSONField(default=list, blank=True)  # List of research areas
    bio = models.TextField(blank=True)
    image = models.URLField(blank=True)  # URL to image
    phone = models.CharField(max_length=20, blank=True)
    office = models.CharField(max_length=255, blank=True)
    website = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = "Faculty Members"

    def __str__(self):
        return f"{self.name} - {self.position}"
