from django.db import models
from image_cropping import ImageRatioField

class ExtensionProgram(models.Model):
    STATUS_CHOICES = [
        ('Ongoing', 'Ongoing'),
        ('Upcoming', 'Upcoming'),
        ('Completed', 'Completed'),
    ]

    CATEGORY_CHOICES = [
        ('Community Impact', 'Community Impact'),
        ('Technology Education', 'Technology Education'),
        ('Skills Development', 'Skills Development'),
        ('Innovation', 'Innovation'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Ongoing')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Community Impact')
    date = models.CharField(max_length=50, help_text="e.g. 'January 2025' or 'Monthly'")
    
    # Metrics
    beneficiaries_count = models.IntegerField(default=0, help_text="Number of people impacted")
    beneficiaries_label = models.CharField(max_length=100, default="Beneficiaries", help_text="e.g. 'Students', 'Farmers'")
    municipality = models.CharField(max_length=100, help_text="Location/Municipality served")
    partner_organization = models.CharField(max_length=200, blank=True, help_text="Partner organization name")
    
    # Visuals
    image = models.ImageField(upload_to='extension_images/', blank=True, null=True)
    cropping = ImageRatioField('image', '800x600')

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f"{self.title} ({self.status})"
