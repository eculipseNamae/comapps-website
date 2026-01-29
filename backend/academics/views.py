from rest_framework import viewsets
from .models import Program
from .serializers import ProgramSerializer

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramSerializer
    lookup_field = 'slug'
