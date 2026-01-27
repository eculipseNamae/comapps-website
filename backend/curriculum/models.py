from django.db import models


class Program(models.Model):
    LEVEL_CHOICES = [
        ('undergraduate', 'Undergraduate'),
        ('graduate', 'Graduate'),
    ]

    name = models.CharField(max_length=255)
    level = models.CharField(max_length=50, choices=LEVEL_CHOICES)
    description = models.TextField()
    duration_years = models.IntegerField(default=4)
    total_units = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f"{self.name} ({self.get_level_display()})"


class Year(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='years')
    number = models.IntegerField()  # 1, 2, 3, 4

    class Meta:
        ordering = ['number']
        unique_together = ('program', 'number')

    def __str__(self):
        return f"{self.program.name} - Year {self.number}"


class Semester(models.Model):
    year = models.ForeignKey(Year, on_delete=models.CASCADE, related_name='semesters')
    number = models.IntegerField()  # 1, 2

    class Meta:
        ordering = ['number']
        unique_together = ('year', 'number')

    def __str__(self):
        return f"{self.year} - Semester {self.number}"


class Course(models.Model):
    CATEGORY_CHOICES = [
        ('GE', 'General Education'),
        ('Major', 'Major'),
        ('PE', 'Physical Education'),
        ('NSTP', 'NSTP'),
        ('Elective', 'Elective'),
    ]

    code = models.CharField(max_length=20)
    title = models.CharField(max_length=255)
    units = models.IntegerField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    prerequisite = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.SET_NULL, related_name='dependents'
    )
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, related_name='courses')
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['code']
        unique_together = ('code', 'semester')

    def __str__(self):
        return f"{self.code} - {self.title}"
