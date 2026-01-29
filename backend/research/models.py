from django.db import models
from faculty.models import FacultyResearchProject as BaseFacultyResearch
from students.models import StudentProject as BaseStudentProject

# Delete the old ResearchProject if possible, or just leave it out. 
# User asked to "delete the current content ... it's obsolete".
# So I will remove ResearchProject class. 
# If existing data exists, this will delete the table on migrate.

class FacultyResearchProject(BaseFacultyResearch):
    class Meta:
        proxy = True
        verbose_name = "Faculty Research Project"
        verbose_name_plural = "Faculty Research Projects"
        app_label = 'research'

class StudentResearchProject(BaseStudentProject):
    class Meta:
        proxy = True
        verbose_name = "Student Research Project"
        verbose_name_plural = "Student Research Projects"
        app_label = 'research'
