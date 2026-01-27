from rest_framework import viewsets, filters
from .models import NewsItem, Event
from .serializers import NewsSerializer, EventSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = NewsItem.objects.all()
    serializer_class = NewsSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'category']
    ordering_fields = ['date', 'created_at']
    ordering = ['-date', '-created_at']


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date', 'time']
    ordering = ['date', 'time']
