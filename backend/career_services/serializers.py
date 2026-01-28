from rest_framework import serializers
from .models import CareerPath

class CareerPathSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerPath
        fields = '__all__'
