from rest_framework import viewsets
from .models import NewsItem
from .serializers import NewsItemSerializer

class NewsItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsItem.objects.all().order_by('-date')
    serializer_class = NewsItemSerializer
