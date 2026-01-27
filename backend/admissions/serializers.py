from rest_framework import serializers
from .models import Program, ApplicationStage, ApplicationRequirement


class ApplicationStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationStage
        fields = ['id', 'name', 'description', 'order']
        read_only_fields = ['id']


class ApplicationRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationRequirement
        fields = ['id', 'name', 'description', 'is_required']
        read_only_fields = ['id']


class ProgramDetailSerializer(serializers.ModelSerializer):
    stages = ApplicationStageSerializer(many=True, read_only=True)
    requirements_list = ApplicationRequirementSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = [
            'id', 'name', 'level', 'description', 'application_deadline',
            'tuition_fee', 'slots_available', 'stages', 'requirements_list'
        ]
        read_only_fields = ['id']


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = [
            'id', 'name', 'level', 'description', 'application_deadline',
            'tuition_fee', 'slots_available'
        ]
        read_only_fields = ['id']
