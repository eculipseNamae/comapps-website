from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Sum, Count
from .models import ExtensionProgram
from .serializers import ExtensionProgramSerializer

class ExtensionProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ExtensionProgram.objects.all()
    serializer_class = ExtensionProgramSerializer

    @action(detail=False, methods=['get'])
    def metrics(self, request):
        total_beneficiaries = ExtensionProgram.objects.aggregate(Sum('beneficiaries_count'))['beneficiaries_count__sum'] or 0
        total_programs = ExtensionProgram.objects.count()
        # Count unique municipalities/partners isn't strictly enforced by CharField, but we can count distinct values if exact matches
        total_communities = ExtensionProgram.objects.values('municipality').distinct().count()
        total_partners = ExtensionProgram.objects.exclude(partner_organization="").values('partner_organization').distinct().count()

        return Response({
            'total_beneficiaries': total_beneficiaries,
            'total_programs': total_programs,
            'total_communities': total_communities,
            'total_partners': total_partners
        })
