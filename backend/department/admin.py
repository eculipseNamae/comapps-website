from django.contrib import admin
from .models import Department, Facility, FAQ


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'description')
        }),
        ('Vision & Mission', {
            'fields': ('vision', 'mission')
        }),
        ('Contact Information', {
            'fields': ('location', 'phone', 'email', 'website')
        }),
    )
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ['name', 'location']
    search_fields = ['name']
    readonly_fields = ['created_at']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'category', 'is_active', 'order']
    search_fields = ['question', 'answer']
    list_filter = ['category', 'is_active']
    readonly_fields = ['created_at']
