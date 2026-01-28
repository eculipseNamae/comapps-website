from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import NewsItem, Event
from .serializers import NewsItemSerializer, EventSerializer

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

class NewsItemPagination(PageNumberPagination):
    page_size = 3 # Start with 3 as requested for initial view
    page_size_query_param = 'page_size' # Allow frontend to request more (e.g. 5)

class NewsItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsItem.objects.all()
    serializer_class = NewsItemSerializer
    pagination_class = NewsItemPagination

from django.utils import timezone

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = EventSerializer

    def get_queryset(self):
        # Auto-delete past events to save storage as requested
        Event.objects.filter(date__lt=timezone.now().date()).delete()
        return Event.objects.filter(date__gte=timezone.now().date()).order_by('date')
