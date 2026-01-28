from rest_framework import serializers
from .models import StudentProject, StudentAchievement

class StudentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProject
        fields = '__all__'

class StudentAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAchievement
        fields = '__all__'
