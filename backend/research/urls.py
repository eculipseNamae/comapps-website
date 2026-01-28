from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResearchProjectViewSet, ResearchAchievementViewSet

router = DefaultRouter()
router.register(r'projects', ResearchProjectViewSet)
router.register(r'achievements', ResearchAchievementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
