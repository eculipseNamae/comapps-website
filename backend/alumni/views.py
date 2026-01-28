from rest_framework import viewsets
from .models import AlumniProfile
from .serializers import AlumniProfileSerializer

class AlumniProfileViewSet(viewsets.ModelViewSet):
    queryset = AlumniProfile.objects.all()
    serializer_class = AlumniProfileSerializer
