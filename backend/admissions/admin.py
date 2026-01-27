from django.contrib import admin
from .models import Program, ApplicationStage, ApplicationRequirement


class ApplicationStageInline(admin.TabularInline):
    model = ApplicationStage
    extra = 1


class ApplicationRequirementInline(admin.TabularInline):
    model = ApplicationRequirement
    extra = 1


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'level', 'application_deadline', 'slots_available']
    search_fields = ['name']
    list_filter = ['level', 'application_deadline']
    inlines = [ApplicationStageInline, ApplicationRequirementInline]
    fieldsets = (
        ('Program Information', {
            'fields': ('name', 'level', 'description')
        }),
        ('Application Details', {
            'fields': ('application_deadline', 'tuition_fee', 'slots_available')
        }),
        ('Requirements', {
            'fields': ('requirements',)
        }),
    )


@admin.register(ApplicationStage)
class ApplicationStageAdmin(admin.ModelAdmin):
    list_display = ['name', 'program', 'order']
    list_filter = ['program']
    ordering = ['program', 'order']


@admin.register(ApplicationRequirement)
class ApplicationRequirementAdmin(admin.ModelAdmin):
    list_display = ['name', 'program', 'is_required']
    list_filter = ['program', 'is_required']
