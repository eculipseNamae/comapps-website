from django.db import models

class StudentProject(models.Model):
    title = models.CharField(max_length=200)
    student_author = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='student_projects/', blank=True, null=True)

    def __str__(self):
        return self.title
