from rest_framework import serializers
from .models import Program, CurriculumCourse

class CurriculumCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurriculumCourse
        fields = ['year', 'semester', 'code', 'title', 'units', 'has_lab']

class ProgramSerializer(serializers.ModelSerializer):
    courses = CurriculumCourseSerializer(many=True, read_only=True)
    
    class Meta:
        model = Program
        fields = '__all__'
