from rest_framework import serializers
from .models import Resource

class ResourceSerializer(serializers.ModelSerializer):
    file_size = serializers.ReadOnlyField()

    class Meta:
        model = Resource
        fields = ['id', 'title', 'category', 'description', 'file', 'uploaded_at', 'file_size']
