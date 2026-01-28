from django.contrib import admin
from .models import Program, CurriculumCourse

class CourseInline(admin.TabularInline):
    model = CurriculumCourse
    extra = 1

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [CourseInline]
