from django.db import models

class NewsItem(models.Model):
    CATEGORY_CHOICES = [
        ('Event', 'Event'),
        ('Facility', 'Facility'),
        ('Achievement', 'Achievement'),
        ('General', 'General'),
    ]
    title = models.CharField(max_length=200)
    date = models.DateField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='General')
    summary = models.TextField()
    image = models.ImageField(upload_to='news_images/', blank=True, null=True)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    time = models.CharField(max_length=100)
    venue = models.CharField(max_length=200)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return self.title
