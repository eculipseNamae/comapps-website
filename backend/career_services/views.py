from rest_framework import viewsets
from .models import CareerPath
from .serializers import CareerPathSerializer

class CareerPathViewSet(viewsets.ModelViewSet):
    queryset = CareerPath.objects.all()
    serializer_class = CareerPathSerializer
