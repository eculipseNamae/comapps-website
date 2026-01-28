from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExtensionProgramViewSet, ExtensionImpactViewSet

router = DefaultRouter()
router.register(r'programs', ExtensionProgramViewSet)
router.register(r'impacts', ExtensionImpactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
