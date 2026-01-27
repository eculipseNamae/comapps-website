from rest_framework import serializers
from .models import NewsItem, Event


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = [
            'id', 'title', 'content', 'category', 'date', 'image',
            'featured', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'date', 'time', 'venue', 'description',
            'image', 'is_active', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']
