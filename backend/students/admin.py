from django.contrib import admin
from .models import StudentProject, StudentAchievement

@admin.register(StudentProject)
class StudentProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'student_author')
    search_fields = ('title', 'student_author')

@admin.register(StudentAchievement)
class StudentAchievementAdmin(admin.ModelAdmin):
    list_display = ('achievement', 'student_name', 'date')
    search_fields = ('achievement', 'student_name')
