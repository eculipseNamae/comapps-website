from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResearchStatisticsOffsetViewSet, FocusAreaViewSet

router = DefaultRouter()
router.register(r'research-settings', ResearchStatisticsOffsetViewSet, basename='research-settings')
router.register(r'focus-areas', FocusAreaViewSet, basename='focus-areas')

urlpatterns = [
    path('', include(router.urls)),
]
