from rest_framework import serializers
from .models import Program, Year, Semester, Course


class CourseSerializer(serializers.ModelSerializer):
    prerequisite_title = serializers.CharField(source='prerequisite.title', read_only=True)

    class Meta:
        model = Course
        fields = [
            'id', 'code', 'title', 'units', 'category', 'prerequisite',
            'prerequisite_title', 'notes'
        ]
        read_only_fields = ['id']


class SemesterSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True)

    class Meta:
        model = Semester
        fields = ['id', 'number', 'courses']
        read_only_fields = ['id']


class YearSerializer(serializers.ModelSerializer):
    semesters = SemesterSerializer(many=True, read_only=True)

    class Meta:
        model = Year
        fields = ['id', 'number', 'semesters']
        read_only_fields = ['id']


class ProgramDetailSerializer(serializers.ModelSerializer):
    years = YearSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = [
            'id', 'name', 'level', 'description', 'duration_years',
            'total_units', 'years'
        ]
        read_only_fields = ['id']


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = [
            'id', 'name', 'level', 'description', 'duration_years', 'total_units'
        ]
        read_only_fields = ['id']
