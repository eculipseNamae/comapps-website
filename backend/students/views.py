from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import StudentProject, StudentAchievement
from .serializers import StudentProjectSerializer, StudentAchievementSerializer

class AchievementPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 100

class StudentProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentProject.objects.all()
    serializer_class = StudentProjectSerializer

class StudentAchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentAchievement.objects.all()
    serializer_class = StudentAchievementSerializer
    pagination_class = AchievementPagination
