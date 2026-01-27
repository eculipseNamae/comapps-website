from rest_framework import serializers
from .models import Department, Facility, FAQ


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = [
            'id', 'name', 'description', 'vision', 'mission',
            'location', 'phone', 'email', 'website'
        ]
        read_only_fields = ['id']


class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = ['id', 'name', 'description', 'location', 'image', 'features']
        read_only_fields = ['id']


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category', 'order']
        read_only_fields = ['id']
