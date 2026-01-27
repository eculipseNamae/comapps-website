from rest_framework import viewsets, filters
from .models import Faculty
from .serializers import FacultySerializer


class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'position', 'email', 'research_interests']
    ordering_fields = ['name', 'position', 'created_at']
    ordering = ['name']
