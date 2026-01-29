from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from faculty.views import FacultyMemberViewSet
from core.views import HeroSlideViewSet, AdmissionDeadlineViewSet
from news.views import NewsItemViewSet, EventViewSet
from students.views import StudentAchievementViewSet, StudentProjectViewSet, AcademicScholarViewSet, AlumniViewSet
from faculty.views import FacultyMemberViewSet, FacultyResearchProjectViewSet
from extensions.views import ExtensionProgramViewSet
from resources_app.views import ResourceViewSet

router = DefaultRouter()
router.register(r'faculty', FacultyMemberViewSet)
router.register(r'faculty-research', FacultyResearchProjectViewSet)
router.register(r'extensions', ExtensionProgramViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'news', NewsItemViewSet)
router.register(r'hero-slides', HeroSlideViewSet)
router.register(r'admission-deadlines', AdmissionDeadlineViewSet)
router.register(r'events', EventViewSet, basename='events')
router.register(r'achievements', StudentAchievementViewSet)
router.register(r'projects', StudentProjectViewSet)
router.register(r'scholars', AcademicScholarViewSet)
router.register(r'alumni', AlumniViewSet)

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
