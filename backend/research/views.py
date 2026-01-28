from rest_framework import viewsets
from .models import ResearchProject, ResearchAchievement
from .serializers import ResearchProjectSerializer, ResearchAchievementSerializer

class ResearchProjectViewSet(viewsets.ModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer

class ResearchAchievementViewSet(viewsets.ModelViewSet):
    queryset = ResearchAchievement.objects.all()
    serializer_class = ResearchAchievementSerializer
