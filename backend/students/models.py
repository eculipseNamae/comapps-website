from django.db import models

class StudentProject(models.Model):
    TRACK_CHOICES = [
        ('IoT', 'Internet of Things'),
        ('Embedded Systems', 'Embedded Systems'),
    ]
    TYPE_CHOICES = [
        ('Capstone', 'Capstone'),
        ('Research', 'Research'),
    ]

    title = models.CharField(max_length=200)
    team_members = models.CharField(max_length=500, help_text="Comma-separated names", default="")
    track = models.CharField(max_length=50, choices=TRACK_CHOICES, default='IoT')
    project_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='Capstone')
    year_level = models.CharField(max_length=20, default='4th Year', help_text="e.g., '4th Year' or '3rd Year'")
    semester = models.CharField(max_length=20, default='2023-2024')
    description = models.TextField()
    technologies = models.TextField(help_text="Comma-separated technologies (e.g., Arduino, React)", default="")
    awards = models.TextField(blank=True, help_text="Comma-separated awards")
    image = models.ImageField(upload_to='student_projects/', blank=True, null=True)

    def __str__(self):
        return self.title

class StudentAchievement(models.Model):
    achievement = models.CharField(max_length=200)
    student_name = models.CharField(max_length=200)
    date = models.DateField()
    
    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"{self.achievement} - {self.student_name}"

class AcademicScholar(models.Model):
    YEAR_CHOICES = [
        ('1st Year', '1st Year'),
        ('2nd Year', '2nd Year'),
        ('3rd Year', '3rd Year'),
        ('4th Year', '4th Year'),
    ]

    name = models.CharField(max_length=200)
    year_level = models.CharField(max_length=20, choices=YEAR_CHOICES, default='1st Year')
    gpa = models.DecimalField(max_digits=4, decimal_places=2, help_text="Grade Point Average (1.00 - 5.00)")

    def __str__(self):
        return f"{self.name} - {self.gpa} ({self.year_level})"

class Alumni(models.Model):
    PROGRAM_CHOICES = [
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
    ]

    name = models.CharField(max_length=200)
    year = models.IntegerField(help_text="Graduation Year (e.g. 2023)")
    track = models.CharField(max_length=100, blank=True, help_text="Track for Undergrads (e.g. IoT, Embedded Systems)")
    program_type = models.CharField(max_length=20, choices=PROGRAM_CHOICES, default='Undergraduate')
    awards = models.TextField(blank=True, help_text="Comma-separated awards")
    thesis = models.CharField(max_length=300)
    presentation = models.CharField(max_length=300, blank=True)

    class Meta:
        verbose_name_plural = "Alumni"
        ordering = ['-year', 'program_type', 'name'] # G (Graduate) comes before U (Undergraduate) alphabetically? No: G < U. So G first.

    def __str__(self):
        return f"{self.name} ({self.year})"
