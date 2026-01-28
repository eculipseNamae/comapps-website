from django.contrib import admin
from .models import NewsItem, Event

@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'category')
    search_fields = ('title', 'content')
    list_filter = ('category', 'date')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'time', 'venue')
    search_fields = ('title', 'venue')
