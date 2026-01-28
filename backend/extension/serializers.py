from rest_framework import serializers
from .models import ExtensionProgram, ExtensionImpact

class ExtensionImpactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtensionImpact
        fields = '__all__'

class ExtensionProgramSerializer(serializers.ModelSerializer):
    impacts = ExtensionImpactSerializer(many=True, read_only=True)

    class Meta:
        model = ExtensionProgram
        fields = '__all__'
