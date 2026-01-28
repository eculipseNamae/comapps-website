from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AlumniProfileViewSet

router = DefaultRouter()
router.register(r'profiles', AlumniProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
