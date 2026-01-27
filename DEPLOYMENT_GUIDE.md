# Deployment Guide for ComApps Department Website

## Project Structure
```
mycomapps/
├── backend/               # Django REST API
│   ├── core/             # Project configuration
│   ├── faculty/          # Faculty management
│   ├── news/             # News and events
│   ├── curriculum/       # Course curriculum
│   ├── admissions/       # Admissions info
│   ├── inquiries/        # Contact inquiries
│   ├── department/       # Department info
│   ├── manage.py
│   ├── requirements.txt
│   └── seed_data.py
│
└── frontend/             # React/Vite frontend
    ├── src/
    │   ├── app/
    │   ├── services/api.ts    # API service
    │   └── main.tsx
    ├── vite.config.ts
    └── package.json
```

## Prerequisites
- Python 3.9+
- Node.js 16+ with npm or yarn
- PostgreSQL (recommended for production) or SQLite

## Development Setup

### Backend Setup
```bash
cd backend

# Create and activate virtual environment
python -m venv myvenv
myvenv\Scripts\activate  # Windows
source myvenv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Load seed data
python manage.py seed_data.py

# Create superuser for admin
python manage.py createsuperuser

# Start development server
python manage.py runserver
# Server runs at http://localhost:8000
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Server runs at http://localhost:5173
```

## API Endpoints

### Faculty API
- `GET /api/faculty/` - List all faculty
- `GET /api/faculty/{id}/` - Get faculty details
- `POST /api/faculty/` - Create faculty (admin)

### News & Events API
- `GET /api/news/` - List news items
- `GET /api/events/` - List events
- `GET /api/news/{id}/` - Get news details
- `POST /api/news/` - Create news (admin)
- `POST /api/events/` - Create event (admin)

### Curriculum API
- `GET /api/curriculum/programs/` - List programs
- `GET /api/curriculum/programs/{id}/` - Get program with curriculum
- `GET /api/courses/` - List courses

### Admissions API
- `GET /api/admissions/programs/` - List programs
- `GET /api/admissions/programs/{id}/` - Get program details with stages and requirements

### Department API
- `GET /api/department/` - Get department info
- `GET /api/facilities/` - List facilities
- `GET /api/faqs/` - List FAQs

### Contact & Inquiries API
- `POST /api/inquiries/` - Submit contact inquiry

## Production Deployment

### Backend Deployment (Example: PythonAnywhere or Heroku)

#### 1. Environment Configuration
Create `.env` file in backend directory:
```env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgresql://user:password@host:port/dbname
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

#### 2. Update settings.py for Production
```python
from decouple import config

DEBUG = config('DEBUG', default=False, cast=bool)
SECRET_KEY = config('SECRET_KEY')
ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='localhost').split(',')

# Use PostgreSQL in production
DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL'),
        conn_max_age=600
    )
}

# CORS Configuration
CORS_ALLOWED_ORIGINS = config('CORS_ALLOWED_ORIGINS', default='').split(',')

# Security settings for production
SECURE_SSL_REDIRECT = not DEBUG
SESSION_COOKIE_SECURE = not DEBUG
CSRF_COOKIE_SECURE = not DEBUG
```

#### 3. Install production dependencies
```bash
pip install gunicorn psycopg2-binary python-decouple dj-database-url
```

#### 4. Collect static files
```bash
python manage.py collectstatic --noinput
```

#### 5. Run migrations on production
```bash
python manage.py migrate --noinput
```

#### 6. Start production server (using Gunicorn)
```bash
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

### Frontend Deployment (Example: Vercel, Netlify, or Firebase)

#### 1. Build frontend
```bash
cd frontend
npm run build
```

#### 2. Update API endpoints for production
In `src/services/api.ts`, change:
```typescript
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
```

Create `.env.production` file:
```
VITE_API_BASE_URL=https://your-api-domain.com/api
```

#### 3. Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

Or deploy to Netlify, Firebase, etc.

## Docker Deployment (Optional)

### Backend Dockerfile
```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
RUN python manage.py collectstatic --noinput
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
```

### Frontend Dockerfile
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Database Management

### Backup Database
```bash
# SQLite
cp db.sqlite3 db.sqlite3.backup

# PostgreSQL
pg_dump dbname > backup.sql
```

### Restore Database
```bash
# SQLite
cp db.sqlite3.backup db.sqlite3

# PostgreSQL
psql dbname < backup.sql
```

## Admin Access
- URL: `http://localhost:8000/admin` (development)
- URL: `https://yourdomain.com/admin` (production)
- Username: (set during superuser creation)
- Password: (set during superuser creation)

## Monitoring & Maintenance

### Health Check Endpoints
- Backend: `http://localhost:8000/api/faculty/` (any endpoint)
- Frontend: Check `http://localhost:5173`

### Logging
Backend logs are displayed in the console when running with `python manage.py runserver`

For production, configure proper logging:
```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': '/var/log/django/error.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'ERROR',
            'propagate': True,
        },
    },
}
```

## Troubleshooting

### CORS Errors
- Ensure backend is running
- Check `CORS_ALLOWED_ORIGINS` in settings.py
- Verify frontend API URL matches backend URL

### Database Errors
- Run migrations: `python manage.py migrate`
- Check database connection string
- For SQLite, ensure `db.sqlite3` has write permissions

### Port Already in Use
```bash
# Find process using port 8000
lsof -i :8000
# Kill process
kill -9 <PID>
```

## Git Deployment

### .gitignore for backend
```
myvenv/
*.pyc
__pycache__/
.env
db.sqlite3
staticfiles/
media/
*.egg-info/
```

### .gitignore for frontend
```
node_modules/
dist/
.env.local
.env.*.local
```

## Performance Tips

1. **Enable Caching**
   - Frontend: Use service workers
   - Backend: Add Redis cache

2. **Optimize Images**
   - Use WebP format
   - Compress before upload

3. **Database Optimization**
   - Add indexes on frequently searched fields
   - Use pagination for large datasets

4. **API Rate Limiting**
```python
# Install django-ratelimit
pip install django-ratelimit

# Usage
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='100/h', method='POST')
def contact_view(request):
    ...
```

## Security Checklist

- [ ] Change SECRET_KEY in production
- [ ] Set DEBUG = False
- [ ] Use HTTPS
- [ ] Enable CSRF protection
- [ ] Set up firewall rules
- [ ] Use environment variables for sensitive data
- [ ] Keep dependencies updated: `pip install --upgrade -r requirements.txt`
- [ ] Regular database backups
- [ ] Monitor error logs
- [ ] Set up SSL certificate (Let's Encrypt)

## Support & Issues

For issues or questions:
1. Check the error logs
2. Verify environment variables
3. Ensure all dependencies are installed
4. Test API endpoints with curl or Postman
5. Check CORS configuration
