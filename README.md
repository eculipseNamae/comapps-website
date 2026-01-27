# ComApps Department Website

A full-stack web application for the Computer Applications Department at Mindanao State University - Iligan Institute of Technology.

## 🎯 Features

- **Faculty Directory** - Browse faculty members with research interests
- **News & Events** - Stay updated with latest announcements and events
- **Contact Form** - Submit inquiries directly to the department
- **Admin Dashboard** - Manage all content through an intuitive admin interface
- **Curriculum Information** - View course requirements and program details
- **Admissions Info** - Access application requirements and deadlines

## 🚀 Quick Start

### Start Backend (Terminal 1)
```bash
cd backend
myvenv\Scripts\activate
python manage.py runserver
```
→ Backend runs at `http://localhost:8000`

### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
→ Frontend runs at `http://localhost:5173`

### Admin Panel
- URL: `http://localhost:8000/admin`
- Manage all content from the admin interface

## 📁 Project Structure

- **`backend/`** - Django REST API with 6 apps
- **`frontend/`** - React + Vite frontend
- **`QUICKSTART.md`** - 5-minute setup guide
- **`DEPLOYMENT_GUIDE.md`** - Production deployment instructions
- **`IMPLEMENTATION_SUMMARY.md`** - Complete project overview

## 🔑 Key Technologies

**Backend**: Django 6.0, Django REST Framework, SQLite/PostgreSQL
**Frontend**: React 18, TypeScript, Vite, Tailwind CSS

## 📊 API Endpoints

```
Faculty:     GET /api/faculty/
News:        GET /api/news/
Events:      GET /api/events/
Curriculum:  GET /api/curriculum/programs/
Admissions:  GET /api/admissions/programs/
Department:  GET /api/department/
Inquiries:   POST /api/inquiries/
```

See `DEPLOYMENT_GUIDE.md` for full API documentation.

## 💻 First-Time Setup

```bash
# Backend
cd backend
python -m venv myvenv
myvenv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_data.py
python manage.py createsuperuser
python manage.py runserver

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

## 📝 Documentation

- **Quick Setup**: See `QUICKSTART.md` (5 minutes)
- **Detailed Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Architecture**: See `IMPLEMENTATION_SUMMARY.md`

## 🔐 Security

- CORS configured for frontend-backend communication
- CSRF protection enabled
- Environment variables for sensitive data
- Production-ready security settings included

## ✅ What's Implemented

- ✅ 6 Django apps with REST APIs
- ✅ 30+ API endpoints
- ✅ Frontend connected to backend
- ✅ Contact form submission
- ✅ Admin panel with full content management
- ✅ Database with seed data
- ✅ Production deployment guides
- ✅ Complete documentation

## 🚨 Common Issues

**Port 8000 in use?**
```bash
lsof -i :8000
kill -9 <PID>
```

**CORS errors?**
- Check backend is running on `http://localhost:8000`
- Check frontend is on `http://localhost:5173`

**Database errors?**
```bash
cd backend
python manage.py migrate
python manage.py seed_data.py
```

## 📞 Useful Commands

```bash
# Backend
python manage.py runserver          # Start development server
python manage.py migrate            # Apply database changes
python manage.py createsuperuser    # Create admin user
python manage.py shell              # Python shell with Django context

# Frontend
npm run dev                          # Start development server
npm run build                        # Build for production
npm run preview                      # Preview production build
```

## 🌐 Deployment

When ready for production, follow `DEPLOYMENT_GUIDE.md` for:
- Environment configuration
- PostgreSQL setup
- SSL/HTTPS setup
- Docker deployment options
- Cloud platform instructions

## 📦 Requirements

- Python 3.9+
- Node.js 16+
- npm or yarn

See `requirements.txt` (backend) and `package.json` (frontend) for dependencies.

## 📞 Admin Features

Access `http://localhost:8000/admin` to:
- ✏️ Add/Edit/Delete faculty members
- 📰 Create and manage news items
- 📅 Schedule events
- 👥 Configure admissions information
- 📚 Manage curriculum
- 📧 View contact inquiries
- ❓ Add FAQs

## 🎓 Next Steps

1. **Explore**: Run the application and explore all pages
2. **Customize**: Add/edit content through admin panel
3. **Integrate**: Use `QUICKSTART.md` to understand the flow
4. **Deploy**: Follow `DEPLOYMENT_GUIDE.md` for production

## 📄 Files to Know

- `QUICKSTART.md` - Start here for fast setup
- `DEPLOYMENT_GUIDE.md` - For production deployment
- `IMPLEMENTATION_SUMMARY.md` - Complete overview
- `BACKEND_ANALYSIS.md` - Architecture details
- `backend/.env.example` - Environment template

## ✨ Latest Update

**January 26, 2026** - Full stack implementation complete with:
- All 6 Django apps implemented
- Frontend connected to backend APIs
- Contact form submission working
- Database seeded with sample data
- Production deployment guides included
- Comprehensive documentation provided

## 🎉 Ready to Go!

The application is fully functional and ready for:
- ✅ Development
- ✅ Testing
- ✅ Deployment

Start with `QUICKSTART.md` for the fastest way to get running!

---

**Questions?** Check the documentation files or review the code comments.

**Ready to deploy?** See `DEPLOYMENT_GUIDE.md` for production setup.
