from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from faculty.views import FacultyMemberViewSet
from news.views import NewsItemViewSet

router = DefaultRouter()
router.register(r'faculty', FacultyMemberViewSet)
router.register(r'news', NewsItemViewSet)

# Admin Site Customization
admin.site.site_header = "ComApps Dashboard"
admin.site.site_title = "ComApps Admin"
admin.site.index_title = "Website Administration"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
