from rest_framework import viewsets
from .models import HeroSlide, AdmissionDeadline
from .serializers import HeroSlideSerializer, AdmissionDeadlineSerializer

class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer

class AdmissionDeadlineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionDeadline.objects.filter(is_active=True).order_by('order', 'start_date')
    serializer_class = AdmissionDeadlineSerializer
