from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, null=True)
    degree = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    outcome = models.TextField(blank=True, null=True)
    careers = models.JSONField(default=list, blank=True)
    # features was renamed to key_focus_areas in migration 0004
    key_focus_areas = models.JSONField(default=list, blank=True)
    image = models.ImageField(upload_to='program_images/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class CurriculumCourse(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='courses')
    year = models.IntegerField()
    semester = models.IntegerField()
    code = models.CharField(max_length=20)
    title = models.CharField(max_length=200)
    units = models.IntegerField()
    has_lab = models.BooleanField(default=False)

    class Meta:
        ordering = ['year', 'semester', 'code']

    def __str__(self):
        return f"{self.code} - {self.title}"
