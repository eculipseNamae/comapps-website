from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentProjectViewSet, StudentOrganizationViewSet, StudentAchievementViewSet

router = DefaultRouter()
router.register(r'projects', StudentProjectViewSet)
router.register(r'organizations', StudentOrganizationViewSet)
router.register(r'achievements', StudentAchievementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
