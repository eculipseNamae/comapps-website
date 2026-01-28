from django.db import models

class ExtensionProgram(models.Model):
    STATUS_CHOICES = [
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('upcoming', 'Upcoming'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255)
    beneficiaries = models.CharField(max_length=255, help_text="Target community or group")
    image = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ExtensionImpact(models.Model):
    program = models.ForeignKey(ExtensionProgram, on_delete=models.CASCADE, related_name='impacts')
    metric = models.CharField(max_length=255, help_text="e.g. Number of beneficiaries trained")
    value = models.CharField(max_length=255, help_text="e.g. 500+")
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.metric}: {self.value}"
