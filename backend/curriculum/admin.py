from django.contrib import admin
from .models import Program, Year, Semester, Course


class SemesterInline(admin.TabularInline):
    model = Semester
    extra = 1


class YearInline(admin.TabularInline):
    model = Year
    extra = 1


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'level', 'duration_years', 'total_units']
    search_fields = ['name']
    list_filter = ['level']
    inlines = [YearInline]


@admin.register(Year)
class YearAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'number']
    list_filter = ['program']
    inlines = [SemesterInline]


@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'number']
    list_filter = ['year__program', 'number']


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['code', 'title', 'units', 'category', 'semester']
    search_fields = ['code', 'title']
    list_filter = ['category', 'semester__year__program']
    readonly_fields = ['created_at']
