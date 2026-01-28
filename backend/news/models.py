from django.db import models

class NewsItem(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    summary = models.TextField()

    image = models.ImageField(upload_to='news_images/', blank=True, null=True)
    content = models.TextField(blank=True)
    
    def __str__(self):
        return self.title
