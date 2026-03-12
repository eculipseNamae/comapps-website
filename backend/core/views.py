from rest_framework import viewsets
from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q
from .models import HeroSlide, AdmissionDeadline
from .serializers import HeroSlideSerializer, AdmissionDeadlineSerializer

from faculty.models import FacultyMember
from news.models import NewsItem, Event
from students.models import StudentProject, StudentAchievement, AcademicScholar

def global_search(request):
    query = request.GET.get('q', '').strip()
    
    if not query:
        return JsonResponse({'results': []})
        
    results = []
    
    # 1. Search Faculty
    faculty_matches = FacultyMember.objects.filter(
        Q(name__icontains=query) | 
        Q(position__icontains=query) | 
        Q(bio__icontains=query)
    )[:5]
    for faculty in faculty_matches:
        results.append({
            'type': 'faculty',
            'title': faculty.name,
            'description': faculty.position,
            'path': f'/faculty/{faculty.id}'
        })
        
    # 2. Search News
    news_matches = NewsItem.objects.filter(
        Q(title__icontains=query) | 
        Q(summary__icontains=query)
    )[:5]
    for news in news_matches:
        results.append({
            'type': 'news',
            'title': news.title,
            'description': news.category,
            'path': '/news'
        })
        
    # 3. Search Events
    event_matches = Event.objects.filter(
        Q(title__icontains=query) | 
        Q(venue__icontains=query)
    )[:5]
    for event in event_matches:
        results.append({
            'type': 'event',
            'title': event.title,
            'description': f"{event.date} at {event.venue}",
            'path': '/news'
        })
        
    # 4. Search Student Projects
    project_matches = StudentProject.objects.filter(
        Q(title__icontains=query) | 
        Q(description__icontains=query) | 
        Q(team_members__icontains=query)
    )[:5]
    for project in project_matches:
        results.append({
            'type': 'project',
            'title': project.title,
            'description': f"{project.project_type} - {project.track}",
            'path': '/students/projects'
        })
        
    # 5. Search Student Achievements
    achievement_matches = StudentAchievement.objects.filter(
        Q(achievement__icontains=query) | 
        Q(student_name__icontains=query)
    )[:5]
    for achievement in achievement_matches:
        results.append({
            'type': 'achievement',
            'title': achievement.achievement,
            'description': achievement.student_name,
            'path': '/students'
        })

    return JsonResponse({'results': results})

def custom_404_test(request):
    return render(request, '404.html', status=404)

def custom_404_view(request, exception=None):
    return render(request, '404.html', status=404)

class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer

class AdmissionDeadlineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionDeadline.objects.filter(is_active=True).order_by('order', 'start_date')
    serializer_class = AdmissionDeadlineSerializer
