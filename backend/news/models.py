from django.db import models


class NewsItem(models.Model):
    CATEGORY_CHOICES = [
        ('event', 'Event'),
        ('achievement', 'Achievement'),
        ('facility', 'Facility'),
        ('announcement', 'Announcement'),
    ]

    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='announcement')
    date = models.DateField()
    image = models.URLField(blank=True)  # URL to image
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date', '-created_at']
        verbose_name_plural = "News Items"

    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField(blank=True)  # URL to image
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['date', 'time']

    def __str__(self):
        return f"{self.title} - {self.date}"
