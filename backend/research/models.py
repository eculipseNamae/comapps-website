from django.db import models

class ResearchProject(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()
    image = models.ImageField(upload_to='research_images/', blank=True, null=True)
    
    def __str__(self):
        return self.title
