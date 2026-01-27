# Backend Analysis & Frontend Integration Checklist

## Current Backend Status

### ✅ Completed Setup
- Django 6.0.1 project initialized
- SQLite database configured
- Django REST Framework installed
- CORS headers configured
- Virtual environment set up with dependencies

### ❌ Missing Components

The backend is a **skeleton project** with zero custom apps and no API endpoints. Here's what needs to be built to support the frontend:

---

## Required Django Apps & Models

### 1. **Faculty App** ⭐ HIGH PRIORITY
**Location:** `backend/faculty/`

**Models needed:**
```python
class Faculty(models.Model):
    name = CharField()
    position = CharField()  # Assistant Professor, Professor, etc.
    email = EmailField()
    research_interests = JSONField()  # List of research areas
    bio = TextField()
    image = ImageField()  # Optional: Faculty photo
    created_at = DateTimeField(auto_now_add=True)
```

**Frontend dependency:** Faculty page displays 20+ faculty members with names, positions, research areas, and emails

**API Endpoints needed:**
- `GET /api/faculty/` - List all faculty
- `GET /api/faculty/{id}/` - Faculty detail
- `POST /api/faculty/` - Admin: Create faculty (optional for now)

---

### 2. **News & Events App** ⭐ HIGH PRIORITY
**Location:** `backend/news/`

**Models needed:**
```python
class NewsItem(models.Model):
    CATEGORY_CHOICES = [
        ('event', 'Event'),
        ('achievement', 'Achievement'),
        ('facility', 'Facility'),
        ('announcement', 'Announcement'),
    ]
    
    title = CharField()
    content = TextField()
    category = CharField(choices=CATEGORY_CHOICES)
    date = DateField()
    image = ImageField()
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

class Event(models.Model):
    title = CharField()
    date = DateField()
    time = TimeField()
    venue = CharField()
    description = TextField()
    created_at = DateTimeField(auto_now_add=True)
```

**Frontend dependency:** News page shows 3 hardcoded news items and 6 upcoming events - all should be from backend

**API Endpoints needed:**
- `GET /api/news/` - List all news items
- `GET /api/news/{id}/` - News detail
- `GET /api/events/` - List all events
- `GET /api/events/{id}/` - Event detail
- `POST /api/news/` - Admin: Create news item
- `POST /api/events/` - Admin: Create event

---

### 3. **Curriculum App** ⭐ HIGH PRIORITY
**Location:** `backend/curriculum/`

**Models needed:**
```python
class CourseCategory(models.TextChoices):
    GENERAL_ED = 'GE', 'General Education'
    MAJOR = 'Major'
    PE = 'PE', 'Physical Education'
    NSTP = 'NSTP'
    ELECTIVE = 'Elective'

class Program(models.Model):
    name = CharField()  # "BS Computer Applications", "MS Computer Applications"
    description = TextField()
    created_at = DateTimeField(auto_now_add=True)

class Year(models.Model):
    program = ForeignKey(Program)
    number = IntegerField()  # 1, 2, 3, 4

class Semester(models.Model):
    year = ForeignKey(Year)
    number = IntegerField()  # 1, 2

class Course(models.Model):
    code = CharField()
    title = CharField()
    units = IntegerField()
    category = CharField(choices=CourseCategory.choices)
    prerequisite = ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)
    semester = ForeignKey(Semester)
    notes = TextField(blank=True)
    created_at = DateTimeField(auto_now_add=True)
```

**Frontend dependency:** Curriculum page displays all courses grouped by year/semester with prerequisites

**API Endpoints needed:**
- `GET /api/programs/` - List programs
- `GET /api/programs/{id}/curriculum/` - Get full curriculum for a program
- `GET /api/courses/` - List all courses with filtering

---

### 4. **Contact & Inquiry App** ⭐ MEDIUM PRIORITY
**Location:** `backend/inquiries/`

**Models needed:**
```python
class ContactInquiry(models.Model):
    SUBJECT_CHOICES = [
        ('general', 'General Inquiry'),
        ('admissions', 'Admissions'),
        ('curriculum', 'Curriculum Questions'),
        ('support', 'Technical Support'),
        ('other', 'Other'),
    ]
    
    name = CharField()
    email = EmailField()
    phone = CharField()
    subject = CharField(choices=SUBJECT_CHOICES)
    message = TextField()
    status = CharField(default='received', choices=[
        ('received', 'Received'),
        ('read', 'Read'),
        ('responded', 'Responded'),
    ])
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
```

**Frontend dependency:** Contact page has a form that needs to submit data to the backend

**API Endpoints needed:**
- `POST /api/inquiries/contact/` - Submit contact form
- `GET /api/inquiries/` - Admin: List all inquiries

---

### 5. **Admissions App** ⭐ MEDIUM PRIORITY
**Location:** `backend/admissions/`

**Models needed:**
```python
class Program(models.Model):
    LEVEL_CHOICES = [('undergraduate', 'Undergraduate'), ('graduate', 'Graduate')]
    
    name = CharField()
    level = CharField(choices=LEVEL_CHOICES)
    description = TextField()
    requirements = JSONField()  # List of requirements
    application_deadline = DateField()
    tuition_fee = DecimalField()

class ApplicationStage(models.Model):
    name = CharField()  # "Online Application", "Entrance Exam", etc.
    description = TextField()
    order = IntegerField()
    
class ApplicationRequirement(models.Model):
    program = ForeignKey(Program)
    name = CharField()
    description = TextField()
```

**Frontend dependency:** Admissions pages mention specific requirements, steps, and deadlines

**API Endpoints needed:**
- `GET /api/programs/` - Filtered by level (undergraduate/graduate)
- `GET /api/programs/{id}/requirements/` - Get requirements for a program
- `GET /api/programs/{id}/application-stages/` - Get application steps

---

### 6. **Department Info App** ⭐ MEDIUM PRIORITY
**Location:** `backend/department/`

**Models needed:**
```python
class Department(models.Model):
    name = CharField()
    description = TextField()
    vision = TextField()
    mission = TextField()
    location = CharField()
    phone = CharField()
    email = EmailField()
    website = URLField()

class DepartmentInfo(models.Model):
    """For storing FAQ, facilities info, etc."""
    key = CharField(unique=True)
    value = JSONField()
```

**Frontend dependency:** About, Facilities, and other pages reference department info

**API Endpoints needed:**
- `GET /api/department/info/` - Get department info (vision, mission, etc.)
- `GET /api/department/faq/` - Get FAQ
- `GET /api/facilities/` - Get facilities information

---

### 7. **Other Content Apps** (LOWER PRIORITY)
These pages have hardcoded content that could eventually be managed via backend:
- **Career Development** - Career opportunities, alumni stories
- **Research** - Research areas, projects
- **Student Life** - Student activities, clubs, testimonials
- **Extension** - Extension programs and services

---

## Backend Configuration Updates Needed

### 1. **Update settings.py**
```python
# Add installed apps
INSTALLED_APPS = [
    # ... existing apps ...
    'rest_framework',
    'corsheaders',
    
    # Custom apps (create these)
    'faculty',
    'news',
    'curriculum',
    'inquiries',
    'admissions',
    'department',
]

# Add CORS middleware
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be early
    # ... other middleware ...
]

# Allow frontend to access API
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite dev server default port
    "http://127.0.0.1:5173",
]

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}
```

### 2. **Create API URLs (urls.py)**
```python
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# ViewSet routers
router = DefaultRouter()
router.register(r'faculty', FacultyViewSet)
router.register(r'news', NewsViewSet)
router.register(r'events', EventViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'courses', CourseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/inquiries/contact/', ContactCreateView.as_view()),
]
```

---

## Frontend API Integration Checklist

### Contact Form Integration
- [ ] Add form state management (useState or form library)
- [ ] Add POST request to `/api/inquiries/contact/`
- [ ] Add success/error notifications

### News Page
- [ ] Replace hardcoded news items with API call to `/api/news/`
- [ ] Replace hardcoded events with API call to `/api/events/`
- [ ] Add loading and error states

### Faculty Page
- [ ] Replace hardcoded faculty list with API call to `/api/faculty/`
- [ ] Add search/filter by research interests
- [ ] Add pagination if list is large

### Curriculum Page
- [ ] Fetch curriculum data from `/api/programs/{id}/curriculum/`
- [ ] Dynamically render courses by year/semester
- [ ] Handle prerequisite display

### Admissions Pages
- [ ] Fetch program details from `/api/programs/`
- [ ] Fetch requirements from `/api/programs/{id}/requirements/`
- [ ] Fetch application stages from `/api/programs/{id}/application-stages/`

---

## Development Roadmap

### Phase 1 (Critical)
1. Create Faculty app + API
2. Create News/Events app + API
3. Create Curriculum app + API
4. Update settings.py with CORS and app registration
5. Create serializers and viewsets
6. Test with curl or Postman
7. Integrate Faculty + News + Curriculum into frontend

### Phase 2 (Important)
1. Create Contact/Inquiries app + API
2. Create Admissions app + API
3. Integrate contact form
4. Integrate admissions pages
5. Add form validation

### Phase 3 (Nice to have)
1. Create Department app for static content
2. Add admin interface customization
3. Add search/filtering features
4. Add pagination to large lists
5. Add image upload support

---

## Database Migrations

After creating each app:
```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Testing the Backend

### Option 1: Django Admin
- Create superuser: `python manage.py createsuperuser`
- Access at `http://localhost:8000/admin`
- Add test data manually

### Option 2: Postman/Insomnia
- Test API endpoints directly
- Verify responses match frontend expectations

### Option 3: pytest-django
- Write automated tests for each endpoint
- Run with `pytest`

---

## Security Notes

⚠️ **Before Production:**
- [ ] Change SECRET_KEY in settings.py
- [ ] Set DEBUG = False
- [ ] Set ALLOWED_HOSTS properly
- [ ] Add authentication/permissions as needed
- [ ] Add CSRF protection
- [ ] Use HTTPS
- [ ] Validate and sanitize all user inputs
- [ ] Add rate limiting for contact form
- [ ] Store sensitive data securely

---

## Summary

**Total new Django apps to create: 6**
- Faculty
- News
- Curriculum
- Inquiries
- Admissions
- Department (optional)

**Total API endpoints: 20+** (basic CRUD operations)

**Estimated effort:** 8-12 hours for full implementation
