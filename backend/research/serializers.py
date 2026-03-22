from rest_framework import serializers
from .models import ResearchStatisticsOffset, Collaborator, FocusArea

class ResearchStatisticsOffsetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchStatisticsOffset
        fields = '__all__'

class CollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaborator
        fields = '__all__'

class FocusAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FocusArea
        fields = '__all__'
