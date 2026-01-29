from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import StudentProject, StudentAchievement, AcademicScholar, Alumni
from .serializers import StudentProjectSerializer, StudentAchievementSerializer, AcademicScholarSerializer, AlumniSerializer

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

class AcademicScholarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AcademicScholar.objects.all().order_by('gpa') # Order by GPA ascending (1.00 is best)
    serializer_class = AcademicScholarSerializer

class AlumniViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
