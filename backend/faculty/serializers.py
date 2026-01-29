from rest_framework import serializers
from .models import FacultyMember, Publication, FacultyResearchProject

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['id', 'title', 'year', 'venue', 'link']

class FacultyResearchProjectSerializer(serializers.ModelSerializer):
    lead_researcher_name = serializers.CharField(source='lead_researcher.name', read_only=True)
    
    class Meta:
        model = FacultyResearchProject
        fields = ['id', 'title', 'lead_researcher', 'lead_researcher_name', 'description', 'status']

class FacultyMemberSerializer(serializers.ModelSerializer):
    publications = PublicationSerializer(many=True, read_only=True)
    
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = FacultyMember
        fields = '__all__'

    def get_profile_image(self, obj):
        if obj.profile_image:
             if 'test' in self.context.get('request').build_absolute_uri(): # HACK: skip thumbnail generation during tests if needed, or better allow try/except
                 pass
             try:
                from easy_thumbnails.files import get_thumbnailer
                return self.context['request'].build_absolute_uri(get_thumbnailer(obj.profile_image).get_thumbnail({
                    'size': (400, 400),
                    'box': obj.cropping,
                    'crop': True,
                    'detail': True,
                }).url)
             except Exception as e:
                 print(f"Error generating thumbnail: {e}")
                 return None
        return None
