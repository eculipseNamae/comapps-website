from django.contrib import admin
from .models import FacultyResearchProject, StudentResearchProject

@admin.register(FacultyResearchProject)
class FacultyResearchProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'lead_researcher', 'status')
    list_filter = ('status', 'lead_researcher')
    search_fields = ('title', 'description')

@admin.register(StudentResearchProject)
class StudentResearchProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'track', 'status', 'year_level')
    search_fields = ('title', 'team_members', 'description')
    list_filter = ('track', 'status', 'year_level')

    def get_queryset(self, request):
        return super().get_queryset(request).filter(project_type='Research')

    def save_model(self, request, obj, form, change):
        obj.project_type = 'Research'
        super().save_model(request, obj, form, change)
