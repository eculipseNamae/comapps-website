from rest_framework import viewsets
from .models import ResourceFile
from .serializers import ResourceFileSerializer

class ResourceFileViewSet(viewsets.ModelViewSet):
    queryset = ResourceFile.objects.all()
    serializer_class = ResourceFileSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset
