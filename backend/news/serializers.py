from rest_framework import serializers
from .models import NewsItem, Event

class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
