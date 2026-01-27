from rest_framework import serializers
from .models import ContactInquiry


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = [
            'id', 'name', 'email', 'phone', 'subject', 'message', 'status', 'created_at'
        ]
        read_only_fields = ['id', 'status', 'created_at']
