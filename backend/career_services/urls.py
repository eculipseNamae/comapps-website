from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CareerPathViewSet

router = DefaultRouter()
router.register(r'paths', CareerPathViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
