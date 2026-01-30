# Project Quickstart Guide

This guide covers how to set up the development environment, run the backend and frontend, and troubleshoot common issues like missing images.

## Prerequisites

- **Python** (3.10 or higher recommended)
- **Node.js** (LTS version recommended)
- **Git**

## Backend Setup (Django)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # Windows
    python -m venv myvenv
    myvenv\Scripts\activate

    # macOS/Linux
    python3 -m venv myvenv
    source myvenv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run Migrations:**
    Initialize the database setup.
    ```bash
    python manage.py migrate
    ```

5.  **Seed the Database (Populate Data):**
    Run the population scripts to create initial data (Students, Projects, Faculty, etc.).
    *Note: These scripts populate text data but NOT images.*
    ```bash
    python populate_faculty.py
    python populate_projects.py
    python populate_scholars.py
    # Run other populate_*.py scripts as needed
    ```

6.  **Create a Superuser (For Admin Access):**
    You need this to access the admin site and upload images.
    ```bash
    python manage.py createsuperuser
    ```
    Follow the prompts to set a username and password.

7.  **Run the Server:**
    ```bash
    python manage.py runserver
    ```
    The backend will start at `http://localhost:8000`.

## Frontend Setup (Vite + React)

1.  **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The frontend will start at `http://localhost:5173`.

## Troubleshooting: "Images Not Loading"

If you see broken images or whitespace where images should be (e.g., in the Student Projects section), this is likely **normal** for a fresh install because **media files (user uploads) are not stored in Git**.

### Why is this happening?
The `populate_projects.py` script creates the project entries in the database, but it leaves the `image` field empty because it cannot generate actual image files.

### How to fix it:
1.  **Manual Upload**:
    - Go to `http://localhost:8000/admin`.
    - Log in with the superuser account created in step 6.
    - Go to **Student Projects** (or appropriate section).
    - Edit the projects and upload images manually.

2.  **Ask Teammate for Media Dump**:
    - Ask your teammate to zip their `backend/media` folder.
    - Extract it into your `backend/media` directory.
    - Note: This only works if your database IDs match theirs (which they likely won't if you both ran `populate` scripts separately). The safest bet is manual upload or asking for a database dump (`db.sqlite3`) AND the `media` folder.

### Configuration Note
Ensure your `backend/config/settings.py` has the following media configuration (it should be default):
```python
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```
The Django backend must be running for images to be served.
