from rest_framework import viewsets, filters
from .models import Program
from .serializers import ProgramSerializer, ProgramDetailSerializer


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
