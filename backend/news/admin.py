from django.contrib import admin
from .models import NewsItem, Event


@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'date', 'featured', 'created_at']
    search_fields = ['title', 'content']
    list_filter = ['category', 'featured', 'date', 'created_at']
    readonly_fields = ['created_at', 'updated_at']
    fieldsets = (
        ('News Information', {
            'fields': ('title', 'category', 'date', 'featured')
        }),
        ('Content', {
            'fields': ('content', 'image')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time', 'venue', 'is_active']
    search_fields = ['title', 'venue']
    list_filter = ['date', 'is_active', 'created_at']
    readonly_fields = ['created_at', 'updated_at']
    fieldsets = (
        ('Event Information', {
            'fields': ('title', 'date', 'time', 'venue', 'is_active')
        }),
        ('Content', {
            'fields': ('description', 'image')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
