from rest_framework import serializers
from .models import ResourceFile

class ResourceFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceFile
        fields = '__all__'
