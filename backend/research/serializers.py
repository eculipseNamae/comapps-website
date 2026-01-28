from rest_framework import serializers
from .models import ResearchProject, ResearchAchievement
from faculty.serializers import FacultySerializer

class ResearchProjectSerializer(serializers.ModelSerializer):
    faculty_details = FacultySerializer(source='faculty_involved', many=True, read_only=True)

    class Meta:
        model = ResearchProject
        fields = '__all__'

class ResearchAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchAchievement
        fields = '__all__'
