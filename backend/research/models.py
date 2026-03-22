from django.db import models
from faculty.models import FacultyResearchProject as BaseFacultyResearch
from students.models import StudentProject as BaseStudentProject

class FocusArea(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, help_text="e.g. 'ai-ml'")
    description = models.TextField(blank=True, default="")

    class Meta:
        verbose_name = "Focus Area"
        verbose_name_plural = "Focus Areas"

    def __str__(self):
        return self.name

class FacultyResearch(BaseFacultyResearch):
    class Meta:
        proxy = True
        verbose_name = "Ongoing Faculty Research"
        verbose_name_plural = "Ongoing Faculty Research"
        app_label = 'research'

class StudentResearch(BaseStudentProject):
    class Meta:
        proxy = True
        verbose_name = "Student Research (Thesis)"
        verbose_name_plural = "Student Research (Thesis)"
        app_label = 'research'

class StudentBuiltProject(BaseStudentProject):
    class Meta:
        proxy = True
        verbose_name = "Student Project"
        verbose_name_plural = "Student Projects"
        app_label = 'research'

class ResearchStatisticsOffset(models.Model):
    base_publications = models.IntegerField(default=0, help_text="Added to the dynamically calculated Publications count.")
    base_awards = models.IntegerField(default=0, help_text="Added to the dynamically calculated Awards count.")
    base_active_projects = models.IntegerField(default=0, help_text="Added to the dynamically calculated Active Projects count.")
    scopus_publications = models.IntegerField(default=0, help_text="Total Scopus publications")
    h_index_department = models.IntegerField(default=0, help_text="H-Index (Department)")
    research_funding = models.BigIntegerField(default=0, help_text="Total Research Funding in Pesos (e.g., 6098999)")
    publications_per_faculty_current = models.DecimalField(max_digits=5, decimal_places=2, default=0.00, help_text="Current Publications per Faculty (e.g., 1.5)")
    publications_per_faculty_target = models.DecimalField(max_digits=5, decimal_places=2, default=0.00, help_text="Target Publications per Faculty (e.g., 2.0)")
    funded_projects = models.IntegerField(default=0, help_text="Total number of funded projects")

    class Meta:
        verbose_name = "Research Statistics Offset"
        verbose_name_plural = "Research Statistics Offsets"
        
    def __str__(self):
        return "Global Research Stats Offset (Edit This)"

class Collaborator(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='collaborators/', blank=True, null=True)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = "Collaborator"
        verbose_name_plural = "Collaborators"

    def __str__(self):
        return self.name
