from django.db import models

class AlumniProfile(models.Model):
    name = models.CharField(max_length=255)
    batch_year = models.IntegerField()
    degree = models.CharField(max_length=255, default='BS Computer Applications')
    current_position = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    testimonial = models.TextField(blank=True)
    image = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField(blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.batch_year})"

    class Meta:
        ordering = ['-batch_year', 'name']
