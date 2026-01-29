from django.db import models

class HeroSlide(models.Model):
    image = models.ImageField(upload_to='hero_slides/')
    title = models.CharField(max_length=200, blank=True)
    caption = models.TextField(blank=True)
    order = models.IntegerField(default=0, help_text="Order in which duplicate slides are shown")
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title if self.title else f"Slide {self.id}"

class AdmissionDeadline(models.Model):
    CATEGORY_CHOICES = [
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
    ]
    
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='Undergraduate')
    title = models.CharField(max_length=200, help_text="e.g., 'Application Period' or 'Scholarship Application'")
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True, help_text="Optional extra info displayed below the date.")
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'start_date']

    def __str__(self):
        return f"{self.category} - {self.title}"
