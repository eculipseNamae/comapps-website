from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import ContactInquiry
from .serializers import ContactInquirySerializer


class ContactInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer
    http_method_names = ['get', 'post']

    def get_queryset(self):
        # Only allow staff to see all inquiries
        if self.request.user.is_staff:
            return ContactInquiry.objects.all()
        return ContactInquiry.objects.none()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Your inquiry has been received. We will get back to you soon.'},
            status=status.HTTP_201_CREATED
        )
