from django.db import models


class ContactInquiry(models.Model):
    SUBJECT_CHOICES = [
        ('general', 'General Inquiry'),
        ('admissions', 'Admissions'),
        ('curriculum', 'Curriculum Questions'),
        ('support', 'Technical Support'),
        ('other', 'Other'),
    ]

    STATUS_CHOICES = [
        ('received', 'Received'),
        ('read', 'Read'),
        ('responded', 'Responded'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=50, choices=SUBJECT_CHOICES)
    message = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='received')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"
