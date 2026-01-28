from rest_framework import viewsets
from .models import HeroSlide
from .serializers import HeroSlideSerializer

class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer
