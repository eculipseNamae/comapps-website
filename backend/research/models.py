from django.db import models
from faculty.models import Faculty

class ResearchProject(models.Model):
    title = models.CharField(max_length=255)
    abstract = models.TextField()
    authors = models.CharField(max_length=500, help_text="Comma-separated names of authors")
    faculty_involved = models.ManyToManyField(Faculty, related_name='research_projects', blank=True)
    publication_date = models.DateField(null=True, blank=True)
    journal_or_conference = models.CharField(max_length=255, blank=True)
    link = models.URLField(blank=True)
    image = models.URLField(blank=True)
    category = models.CharField(max_length=100, choices=[
        ('faculty', 'Faculty Research'),
        ('student', 'Student Research'),
        ('collaborative', 'Collaborative Research')
    ], default='faculty')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ResearchAchievement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    awarding_body = models.CharField(max_length=255)
    image = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
