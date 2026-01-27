from django.contrib import admin
from .models import Faculty


@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'email', 'created_at']
    search_fields = ['name', 'email', 'position']
    list_filter = ['position', 'created_at']
    readonly_fields = ['created_at', 'updated_at']
    fieldsets = (
        ('Personal Information', {
            'fields': ('name', 'email', 'phone', 'website')
        }),
        ('Position & Details', {
            'fields': ('position', 'office', 'bio', 'image')
        }),
        ('Research', {
            'fields': ('research_interests',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
