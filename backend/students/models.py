from django.db import models

class StudentProject(models.Model):
    TRACK_CHOICES = [
        ('IoT', 'Internet of Things'),
        ('Embedded Systems', 'Embedded Systems'),
    ]
    TYPE_CHOICES = [
        ('Project', 'Project'),
        ('Research', 'Research'),
    ]
    STATUS_CHOICES = [
        ('Ongoing', 'Ongoing'),
        ('Completed', 'Completed'),
    ]
    YEAR_CHOICES = [
        ('1st Year', '1st Year'),
        ('2nd Year', '2nd Year'),
        ('3rd Year', '3rd Year'),
        ('4th Year', '4th Year'),
    ]

    title = models.CharField(max_length=200)
    team_members = models.CharField(max_length=500, help_text="Comma-separated names (including Faculty Adviser)", default="")
    track = models.CharField(max_length=50, choices=TRACK_CHOICES, default='IoT', blank=True)
    project_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='Project')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Ongoing')
    is_masters = models.BooleanField(default=False, verbose_name="Is Master's Project", help_text="Check if this is a Master's project (hides track & year level)")
    year_level = models.CharField(max_length=20, choices=YEAR_CHOICES, default='4th Year', blank=True, help_text="Leave blank if Master's")
    semester = models.CharField(max_length=20, default='2023-2024')
    description = models.TextField()
    technologies = models.TextField(help_text="Comma-separated technologies (e.g., Arduino, React)", default="")
    awards = models.TextField(help_text="Comma-separated awards (if any)", blank=True, default="")
    image = models.ImageField(upload_to='student_projects/', blank=True, null=True)
    abstract = models.TextField(blank=True, default="")
    pdf_upload = models.FileField(upload_to='research_papers/', blank=True, null=True, help_text="Upload full paper (PDF)")
    focus_areas = models.ManyToManyField('research.FocusArea', related_name='student_projects', blank=True, help_text="Used primarily for Student Research (Theses).")

    def clean(self):
        from django.core.exceptions import ValidationError
        if self.is_masters:
            self.year_level = ''
            self.track = ''
        else:
            if not self.year_level:
                raise ValidationError({"year_level": "Year level is required for undergraduate projects."})
            if self.year_level in ['3rd Year', '4th Year'] and not self.track:
                raise ValidationError({"track": "Track is required for 3rd/4th year undergraduate projects."})

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
    gpa = models.DecimalField(max_digits=6, decimal_places=4, help_text="Grade Point Average (1.00 - 5.00)")

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

class StudentProjectPublication(models.Model):
    project = models.ForeignKey(StudentProject, on_delete=models.CASCADE, related_name='publications')
    journal_name = models.CharField(max_length=300)
    link = models.URLField(blank=True)

    class Meta:
        verbose_name = "Publication"
        verbose_name_plural = "Publications"

    def __str__(self):
        return f"{self.journal_name} ({self.project.title})"

class StudentProjectPresentation(models.Model):
    project = models.ForeignKey(StudentProject, on_delete=models.CASCADE, related_name='presentations')
    conference_name = models.CharField(max_length=300)

    class Meta:
        verbose_name = "Presentation"
        verbose_name_plural = "Presentations"

    def __str__(self):
        return f"{self.conference_name} ({self.project.title})"
