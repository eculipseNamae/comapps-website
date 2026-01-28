from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    outcome = models.TextField()
    careers = models.JSONField(default=list)

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

    def __str__(self):
        return f"{self.code} - {self.title}"
