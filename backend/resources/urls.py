from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResourceFileViewSet

router = DefaultRouter()
router.register(r'files', ResourceFileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
