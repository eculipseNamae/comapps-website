from django.contrib import admin
from django.db import models
from .models import FacultyMember, Publication, RegularFaculty, Lecturer, SupportStaff

class PublicationInline(admin.TabularInline):
    model = Publication
    extra = 1

from image_cropping import ImageCroppingMixin

@admin.register(RegularFaculty)
class RegularFacultyAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('name', 'position', 'profile_image', 'email')
    search_fields = ('name', 'email', 'bio')
    inlines = [PublicationInline]
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('id', 'name', 'profile_image', 'cropping', 'email', 'position', 'bio')
        }),
        ('Academic & Research', {
            'fields': ('research_interests', 'networks'),
            'classes': ('collapse',),
        }),
    )

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.exclude(position__icontains="Lecturer").exclude(position__icontains="Secretary").exclude(position__icontains="Staff").exclude(position__icontains="Admin")

@admin.register(Lecturer)
class LecturerAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('name', 'position', 'profile_image', 'email')
    search_fields = ('name', 'email', 'bio')
    # Lecturers might not have publications displayed or maybe they do, keeping it safely
    fieldsets = (
        ('Personal Information', {
            'fields': ('id', 'name', 'profile_image', 'cropping', 'email', 'position', 'bio')
        }),
        ('Academic & Research', {
            'fields': ('research_interests', 'networks'),
            'classes': ('collapse',),
        }),
    )

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.filter(position__icontains="Lecturer")

@admin.register(SupportStaff)
class SupportStaffAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('name', 'position', 'profile_image', 'email')
    search_fields = ('name', 'email', 'bio')
    
    # Exclude strict research fields for staff
    fieldsets = (
        ('Personal Information', {
            'fields': ('id', 'name', 'profile_image', 'cropping', 'email', 'position', 'bio')
        }),
        # Removed Academic & Research section
    )

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        # Filter for Staff-like positions
        return qs.filter(models.Q(position__icontains="Secretary") | models.Q(position__icontains="Staff") | models.Q(position__icontains="Admin"))
