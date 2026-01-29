from django.contrib import admin
from .models import StudentProject, StudentAchievement, AcademicScholar, Alumni

@admin.register(StudentProject)
class StudentProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'track', 'project_type', 'year_level', 'semester')
    search_fields = ('title', 'team_members', 'description', 'technologies')
    list_filter = ('track', 'project_type', 'year_level', 'semester')

@admin.register(StudentAchievement)
class StudentAchievementAdmin(admin.ModelAdmin):
    list_display = ('achievement', 'student_name', 'date')
    search_fields = ('achievement', 'student_name')

@admin.register(AcademicScholar)
class AcademicScholarAdmin(admin.ModelAdmin):
    list_display = ('name', 'gpa', 'year_level')
    list_filter = ('year_level',)
    search_fields = ('name',)

@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    list_display = ('name', 'year', 'track', 'program_type')
    list_filter = ('year', 'program_type', 'track')
    search_fields = ('name', 'thesis')
