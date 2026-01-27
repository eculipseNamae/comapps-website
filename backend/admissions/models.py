from django.db import models


class Program(models.Model):
    LEVEL_CHOICES = [
        ('undergraduate', 'Undergraduate'),
        ('graduate', 'Graduate'),
    ]

    name = models.CharField(max_length=255)
    level = models.CharField(max_length=50, choices=LEVEL_CHOICES)
    description = models.TextField()
    requirements = models.JSONField(default=list, blank=True)  # List of requirements
    application_deadline = models.DateField()
    tuition_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    slots_available = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f"{self.name} ({self.get_level_display()})"


class ApplicationStage(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='stages')
    name = models.CharField(max_length=255)
    description = models.TextField()
    order = models.IntegerField()

    class Meta:
        ordering = ['order']
        unique_together = ('program', 'order')

    def __str__(self):
        return f"{self.program.name} - {self.name}"


class ApplicationRequirement(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='requirements_list')
    name = models.CharField(max_length=255)
    description = models.TextField()
    is_required = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.program.name} - {self.name}"
