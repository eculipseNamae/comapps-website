from django.contrib import admin
from .models import StudentProject, StudentOrganization, StudentAchievement

admin.site.register(StudentProject)
admin.site.register(StudentOrganization)
admin.site.register(StudentAchievement)
