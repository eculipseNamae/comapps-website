from rest_framework import serializers
from .models import StudentProject, StudentOrganization, StudentAchievement

class StudentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProject
        fields = '__all__'

class StudentOrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentOrganization
        fields = '__all__'

class StudentAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAchievement
        fields = '__all__'
