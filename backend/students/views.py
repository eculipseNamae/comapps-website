from rest_framework import viewsets
from .models import StudentProject, StudentOrganization, StudentAchievement
from .serializers import StudentProjectSerializer, StudentOrganizationSerializer, StudentAchievementSerializer

class StudentProjectViewSet(viewsets.ModelViewSet):
    queryset = StudentProject.objects.all()
    serializer_class = StudentProjectSerializer

class StudentOrganizationViewSet(viewsets.ModelViewSet):
    queryset = StudentOrganization.objects.all()
    serializer_class = StudentOrganizationSerializer

class StudentAchievementViewSet(viewsets.ModelViewSet):
    queryset = StudentAchievement.objects.all()
    serializer_class = StudentAchievementSerializer
