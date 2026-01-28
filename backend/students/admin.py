from django.contrib import admin
from .models import StudentProject

@admin.register(StudentProject)
class StudentProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'student_author')
