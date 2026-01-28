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
