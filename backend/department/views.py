from rest_framework import viewsets, filters
from .models import Department, Facility, FAQ
from .serializers import DepartmentSerializer, FacilitySerializer, FAQSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    http_method_names = ['get']


class FacilityViewSet(viewsets.ModelViewSet):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'description']
    http_method_names = ['get']


class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['order']
    ordering = ['order']
    http_method_names = ['get']
