from django.contrib import admin
from .models import HeroSlide, AdmissionDeadline

@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'order', 'is_active', 'image')
    list_editable = ('order', 'is_active')
    search_fields = ('title', 'caption')

@admin.register(AdmissionDeadline)
class AdmissionDeadlineAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'start_date', 'end_date', 'is_active', 'order')
    list_filter = ('category', 'is_active')
    list_editable = ('is_active', 'order')
    search_fields = ('title', 'description')
