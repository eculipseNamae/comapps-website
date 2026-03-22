from django.contrib import admin
from .models import FacultyResearch, StudentResearch, StudentBuiltProject, ResearchStatisticsOffset, Collaborator, FocusArea
from students.models import StudentProjectPublication, StudentProjectPresentation

@admin.register(FacultyResearch)
class FacultyResearchAdmin(admin.ModelAdmin):
    list_display = ('title', 'lead_researcher', 'status')
    list_filter = ('status', 'lead_researcher')
    search_fields = ('title', 'description')

@admin.register(FocusArea)
class FocusAreaAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)

class StudentProjectPublicationInline(admin.TabularInline):
    model = StudentProjectPublication
    extra = 0
    classes = ['collapse']

class StudentProjectPresentationInline(admin.TabularInline):
    model = StudentProjectPresentation
    extra = 0
    classes = ['collapse']

@admin.register(StudentResearch)
class StudentResearchAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'semester')
    search_fields = ('title', 'team_members', 'description')
    list_filter = ('status', 'semester')
    inlines = [StudentProjectPublicationInline, StudentProjectPresentationInline]

    fieldsets = (
        ('General Information', {
            'fields': ('title', 'team_members', 'status', 'semester', 'abstract', 'description', 'focus_areas', 'awards')
        }),
        ('Publication / Output (If Completed)', {
            'fields': ('pdf_upload',),
            'classes': ('collapse',)
        }),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).filter(project_type='Research')

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'focus_areas' in form.base_fields:
            form.base_fields['focus_areas'].widget.can_add_related = False
            form.base_fields['focus_areas'].widget.can_change_related = False
            form.base_fields['focus_areas'].widget.can_delete_related = False
        return form

    def save_model(self, request, obj, form, change):
        obj.project_type = 'Research'
        super().save_model(request, obj, form, change)

@admin.register(StudentBuiltProject)
class StudentBuiltProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'track', 'status', 'year_level')
    search_fields = ('title', 'team_members', 'description')
    list_filter = ('track', 'status', 'year_level')
    
    fieldsets = (
        ('General Information', {
            'fields': ('title', 'description', 'image', 'team_members', 'technologies', 'is_masters', 'year_level', 'track', 'status', 'semester', 'awards')
        }),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).filter(project_type='Project')

    def save_model(self, request, obj, form, change):
        obj.project_type = 'Project'
        super().save_model(request, obj, form, change)

@admin.register(ResearchStatisticsOffset)
class ResearchStatisticsOffsetAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(Collaborator)
class CollaboratorAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    search_fields = ('name', 'description')
    ordering = ('order', 'name')
