"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from django.views.generic import RedirectView

from faculty.views import FacultyViewSet
from news.views import NewsViewSet, EventViewSet
from curriculum.views import ProgramViewSet as CurriculumProgramViewSet, CourseViewSet
from admissions.views import ProgramViewSet as AdmissionsProgramViewSet
from inquiries.views import ContactInquiryViewSet
from department.views import DepartmentViewSet, FacilityViewSet, FAQViewSet

# Create routers
router = DefaultRouter()
router.register(r'faculty', FacultyViewSet, basename='faculty')
router.register(r'news', NewsViewSet, basename='news')
router.register(r'events', EventViewSet, basename='event')
router.register(r'courses', CourseViewSet, basename='course')
router.register(r'department', DepartmentViewSet, basename='department')
router.register(r'facilities', FacilityViewSet, basename='facility')
router.register(r'faqs', FAQViewSet, basename='faq')
router.register(r'inquiries', ContactInquiryViewSet, basename='inquiry')

# Register curriculum programs with custom namespace
curriculum_router = DefaultRouter()
curriculum_router.register(r'programs', CurriculumProgramViewSet, basename='curriculum-program')

# Register admissions programs with custom namespace
admissions_router = DefaultRouter()
admissions_router.register(r'programs', AdmissionsProgramViewSet, basename='admissions-program')

urlpatterns = [
    path('admin/', admin.site.urls),
    # Redirect root to frontend index (served from static files when available)
    path('', RedirectView.as_view(url='/static/index.html', permanent=False)),
    path('api/', include(router.urls)),
    path('api/curriculum/', include(curriculum_router.urls)),
    path('api/admissions/', include(admissions_router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
