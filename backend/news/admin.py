from django.contrib import admin
from .models import NewsItem

@admin.register(NewsItem)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    search_fields = ('title', 'summary')
