from django.db import models
from image_cropping import ImageRatioField

class FacultyMember(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    email = models.EmailField()
    bio = models.TextField(blank=True, null=True)
    research_interests = models.JSONField(default=list, blank=True)
    networks = models.JSONField(default=dict, blank=True)
    profile_image = models.ImageField(upload_to='faculty_images/', blank=True, null=True)
    cropping = ImageRatioField('profile_image', '400x400')

    def __str__(self):
        return self.name

class RegularFaculty(FacultyMember):
    class Meta:
        proxy = True
        verbose_name = "Faculty Member"
        verbose_name_plural = "Faculty Members"

class Lecturer(FacultyMember):
    class Meta:
        proxy = True
        verbose_name = "Lecturer"
        verbose_name_plural = "Lecturers"

class SupportStaff(FacultyMember):
    class Meta:
        proxy = True
        verbose_name = "Support Staff"
        verbose_name_plural = "Support Staff"

class Publication(models.Model):
    faculty = models.ForeignKey(FacultyMember, related_name='publications', on_delete=models.CASCADE)
    title = models.CharField(max_length=500)
    year = models.IntegerField()
    venue = models.CharField(max_length=500)
    link = models.URLField(blank=True)

    def __str__(self):
        return f"{self.title} ({self.year})"
