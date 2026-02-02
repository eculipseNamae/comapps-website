from rest_framework import viewsets
from django.shortcuts import render
from .models import HeroSlide, AdmissionDeadline
from .serializers import HeroSlideSerializer, AdmissionDeadlineSerializer

def custom_404_test(request):
    return render(request, '404.html', status=404)

def custom_404_view(request, exception=None):
    return render(request, '404.html', status=404)

class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer

class AdmissionDeadlineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionDeadline.objects.filter(is_active=True).order_by('order', 'start_date')
    serializer_class = AdmissionDeadlineSerializer
