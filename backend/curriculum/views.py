from rest_framework import viewsets, filters
from .models import Program, Course
from .serializers import ProgramSerializer, ProgramDetailSerializer, CourseSerializer


class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name', 'level']
    ordering = ['name']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProgramDetailSerializer
        return ProgramSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['code', 'title', 'category']
    ordering_fields = ['code', 'title']
    ordering = ['code']
