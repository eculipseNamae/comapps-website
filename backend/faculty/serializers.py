from rest_framework import serializers
from .models import Faculty


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [
            'id', 'name', 'position', 'email', 'research_interests',
            'bio', 'image', 'phone', 'office', 'website', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']
