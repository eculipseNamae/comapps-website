from rest_framework import viewsets
from .models import ResearchStatisticsOffset, Collaborator, FocusArea
from .serializers import ResearchStatisticsOffsetSerializer, CollaboratorSerializer, FocusAreaSerializer

class ResearchStatisticsOffsetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchStatisticsOffset.objects.all()
    serializer_class = ResearchStatisticsOffsetSerializer

class CollaboratorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer

class FocusAreaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FocusArea.objects.all()
    serializer_class = FocusAreaSerializer
