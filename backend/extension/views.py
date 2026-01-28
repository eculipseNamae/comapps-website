from rest_framework import viewsets
from .models import ExtensionProgram, ExtensionImpact
from .serializers import ExtensionProgramSerializer, ExtensionImpactSerializer

class ExtensionProgramViewSet(viewsets.ModelViewSet):
    queryset = ExtensionProgram.objects.all()
    serializer_class = ExtensionProgramSerializer

class ExtensionImpactViewSet(viewsets.ModelViewSet):
    queryset = ExtensionImpact.objects.all()
    serializer_class = ExtensionImpactSerializer
