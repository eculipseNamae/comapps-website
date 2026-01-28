from django.db import models

class CareerPath(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    skills_required = models.TextField(help_text="Comma-separated list of skills")
    potential_employers = models.TextField(help_text="Types of companies or specific examples")
    salary_range = models.CharField(max_length=100, blank=True, help_text="e.g. 30k-50k Entry Level")
    image = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
