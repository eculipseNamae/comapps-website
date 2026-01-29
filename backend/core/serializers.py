from rest_framework import serializers
from .models import HeroSlide, AdmissionDeadline

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlide
        fields = ['id', 'image', 'title', 'caption', 'order', 'is_active']

class AdmissionDeadlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionDeadline
        fields = ['id', 'category', 'title', 'start_date', 'end_date', 'description', 'is_active', 'order']
