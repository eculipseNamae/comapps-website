from rest_framework import serializers
from .models import ExtensionProgram

class ExtensionProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtensionProgram
        fields = '__all__'
