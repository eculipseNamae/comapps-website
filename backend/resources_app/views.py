from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from .models import Resource
from .serializers import ResourceSerializer

class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'category', 'description']
