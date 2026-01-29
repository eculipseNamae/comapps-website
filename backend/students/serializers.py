from rest_framework import serializers
from .models import StudentProject, StudentAchievement, AcademicScholar, Alumni

class StudentProjectSerializer(serializers.ModelSerializer):
    students = serializers.SerializerMethodField()
    technologies = serializers.SerializerMethodField()
    awards = serializers.SerializerMethodField()
    semester = serializers.CharField()
    year = serializers.CharField(source='year_level') # Map year_level to year for frontend compat
    type = serializers.CharField(source='project_type') # Map project_type to type for frontend compat

    class Meta:
        model = StudentProject
        fields = ['id', 'title', 'description', 'image', 'track', 'year', 'semester', 'type', 'students', 'technologies', 'awards', 'status']

    def get_students(self, obj):
        return [s.strip() for s in obj.team_members.split(',')] if obj.team_members else []

    def get_technologies(self, obj):
        return [t.strip() for t in obj.technologies.split(',')] if obj.technologies else []

    def get_awards(self, obj):
        return [a.strip() for a in obj.awards.split(',')] if obj.awards and obj.awards.strip() else []

class StudentAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAchievement
        fields = '__all__'

class AcademicScholarSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicScholar
        fields = '__all__'

class AlumniSerializer(serializers.ModelSerializer):
    awards = serializers.SerializerMethodField()

    class Meta:
        model = Alumni
        fields = '__all__'

    def get_awards(self, obj):
        if not obj.awards:
            return []
        return [award.strip() for award in obj.awards.split(',')]
