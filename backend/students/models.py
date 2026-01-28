from django.db import models

class StudentProject(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    students_involved = models.TextField(help_text="Comma-separated names of students")
    advisor = models.CharField(max_length=255, blank=True)
    year_completed = models.IntegerField()
    image = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class StudentOrganization(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    logo = models.URLField(blank=True)
    president = models.CharField(max_length=255)
    adviser = models.CharField(max_length=255)
    founded_year = models.IntegerField()
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class StudentAchievement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    recipient = models.CharField(max_length=255)
    category = models.CharField(max_length=100, choices=[
        ('academic', 'Academic Excellence'),
        ('competition', 'Competition'),
        ('leadership', 'Leadership'),
        ('other', 'Other')
    ])
    image = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.recipient}"
