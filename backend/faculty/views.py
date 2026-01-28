from rest_framework import viewsets
from .models import FacultyMember
from .serializers import FacultyMemberSerializer

class FacultyMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FacultyMember.objects.all()
    serializer_class = FacultyMemberSerializer
