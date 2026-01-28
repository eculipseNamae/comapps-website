from django.contrib import admin
from .models import ResearchProject

@admin.register(ResearchProject)
class ResearchAdmin(admin.ModelAdmin):
    list_display = ('title',)
