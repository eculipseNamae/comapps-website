# Quick Start Guide - ComApps Department Website

## System Requirements
- Windows, macOS, or Linux
- Python 3.9 or higher
- Node.js 16 or higher
- Git

## 5-Minute Setup

### Step 1: Backend Setup (Terminal 1)
```bash
# Navigate to backend directory
cd backend

# Activate virtual environment
myvenv\Scripts\activate  # Windows
# OR
source myvenv/bin/activate  # macOS/Linux

# Install dependencies (if not already installed)
pip install -r requirements.txt

# Start the server
python manage.py runserver
```
✅ Backend running at: `http://localhost:8000`

### Step 2: Frontend Setup (Terminal 2)
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```
✅ Frontend running at: `http://localhost:5173`

### Step 3: Access the Application
- **Website**: Open `http://localhost:5173` in your browser
- **Admin Panel**: Go to `http://localhost:8000/admin`
  - Username: (set during setup)
  - Password: (set during setup)

## What Works Out of the Box

✅ **Faculty Page** - Displays faculty from backend database
✅ **News & Events** - Loads from backend API
✅ **Contact Form** - Submits inquiries to backend
✅ **Admin Interface** - Manage all content at `/admin`

## First-Time Setup (Complete)

If you need to set everything up from scratch:

### Backend First-Time Setup
```bash
cd backend
myvenv\Scripts\activate

# Install packages
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Load seed data (faculty, news, events, etc.)
python manage.py seed_data.py

# Create admin user
python manage.py createsuperuser
# Follow prompts to create username/password

# Start server
python manage.py runserver
```

### Frontend First-Time Setup
```bash
cd frontend
npm install
npm run dev
```

## Useful Commands

### Backend
```bash
# Start development server
python manage.py runserver

# Create database migrations (after changing models)
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Access Django shell for testing
python manage.py shell

# Run seed data script
python manage.py seed_data.py

# Collect static files (production)
python manage.py collectstatic
```

### Frontend
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Stopping Servers

- **Backend**: Press `Ctrl+C` in the terminal
- **Frontend**: Press `Ctrl+C` in the terminal

## Common Issues & Solutions

### "Port 8000 already in use"
```bash
# Find and kill the process
lsof -i :8000
kill -9 <PID>
```

### "CORS error" or "API not accessible"
- Check backend is running on `http://localhost:8000`
- Check `CORS_ALLOWED_ORIGINS` in settings.py
- Frontend should be on `http://localhost:5173`

### "Module not found" errors
```bash
# Backend
pip install -r requirements.txt

# Frontend
npm install
```

### Database errors
```bash
# Reset database (WARNING: Deletes all data)
rm db.sqlite3
python manage.py migrate
python manage.py seed_data.py
```

## API Endpoints Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/faculty/` | GET | List all faculty |
| `/api/news/` | GET | List all news |
| `/api/events/` | GET | List all events |
| `/api/inquiries/` | POST | Submit contact form |
| `/api/curriculum/programs/` | GET | List curriculum programs |
| `/api/admissions/programs/` | GET | List admissions programs |
| `/api/department/` | GET | Get department info |
| `/api/facilities/` | GET | List facilities |
| `/api/faqs/` | GET | List FAQs |

## Testing the Connection

### Test Backend
```bash
# Open another terminal
curl http://localhost:8000/api/faculty/
```

### Test Frontend
- Open `http://localhost:5173` in your browser
- Check browser console (F12) for any errors
- Network tab shows API calls

## Admin Features

Access the admin panel at `http://localhost:8000/admin` with your superuser credentials.

**You can:**
- ✏️ Add/Edit/Delete Faculty members
- 📰 Create News items and Events
- 👥 Manage Admissions programs
- 📚 Configure Curriculum
- 🏫 Update Department information
- 📧 View Contact inquiries
- ❓ Manage FAQs

## Next Steps

1. **Customize Content**: Edit data through admin panel
2. **Add More Features**: Check BACKEND_ANALYSIS.md for features
3. **Deploy**: Read DEPLOYMENT_GUIDE.md for production setup
4. **Styling**: Modify Tailwind CSS in frontend
5. **Database**: Migrate to PostgreSQL for production

## Project Files Structure
```
mycomapps/
├── backend/
│   ├── core/              # Main Django config
│   ├── faculty/           # Faculty app
│   ├── news/              # News & Events app
│   ├── curriculum/        # Curriculum app
│   ├── admissions/        # Admissions app
│   ├── inquiries/         # Contact form app
│   ├── department/        # Department info app
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3         # Database
│   └── seed_data.py       # Initial data script
│
├── frontend/
│   ├── src/
│   │   ├── app/           # React components
│   │   ├── services/      # API service
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── DEPLOYMENT_GUIDE.md    # Production deployment
└── BACKEND_ANALYSIS.md    # Architecture notes
```

## Support

For detailed information:
- Backend issues: Check `BACKEND_ANALYSIS.md`
- Deployment help: Read `DEPLOYMENT_GUIDE.md`
- API documentation: Visit `/api/` endpoints in browser

## Key Features Implemented

✅ 6 Django apps with REST APIs
✅ 25+ API endpoints
✅ Responsive frontend with React + Vite
✅ Contact form submission
✅ Admin panel for content management
✅ Database with seed data
✅ CORS configured for frontend-backend communication
✅ Production-ready configuration examples

## Ready to Deploy?

When you're ready to go live:
1. Read `DEPLOYMENT_GUIDE.md`
2. Set up environment variables
3. Use PostgreSQL instead of SQLite
4. Enable HTTPS
5. Deploy backend to cloud service (Heroku, AWS, etc.)
6. Deploy frontend to CDN (Vercel, Netlify, etc.)

Happy coding! 🚀
