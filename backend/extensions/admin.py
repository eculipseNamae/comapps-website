from django.contrib import admin
from image_cropping import ImageCroppingMixin
from .models import ExtensionProgram

@admin.register(ExtensionProgram)
class ExtensionProgramAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('title', 'status', 'category', 'date', 'beneficiaries_count')
    list_filter = ('status', 'category')
    search_fields = ('title', 'description', 'municipality')
    fieldsets = (
        ('Program Details', {
            'fields': ('title', 'status', 'category', 'description', 'date')
        }),
        ('Impact Metrics', {
            'fields': ('beneficiaries_count', 'beneficiaries_label', 'municipality', 'partner_organization')
        }),
        ('Media', {
            'fields': ('image', 'cropping'),
            'classes': ('collapse',),
            'description': 'Image is only displayed for Ongoing programs on the frontend.'
        }),
    )
