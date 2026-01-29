from rest_framework import viewsets
from .models import FacultyMember, FacultyResearchProject
from .serializers import FacultyMemberSerializer, FacultyResearchProjectSerializer

class FacultyMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FacultyMember.objects.all()
    serializer_class = FacultyMemberSerializer

class FacultyResearchProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FacultyResearchProject.objects.all()
    serializer_class = FacultyResearchProjectSerializer
