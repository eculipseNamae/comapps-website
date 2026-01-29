export const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchFaculty() {
  const response = await fetch(`${API_BASE_URL}/faculty/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchFacultyMember(id: string) {
  const response = await fetch(`${API_BASE_URL}/faculty/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}



export async function fetchNews(page = 1) {
  const response = await fetch(`${API_BASE_URL}/news/?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchEvents() {
  const response = await fetch(`${API_BASE_URL}/events/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchStudentAchievements(page = 1) {
  const response = await fetch(`${API_BASE_URL}/achievements/?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchHeroSlides() {
  const response = await fetch(`${API_BASE_URL}/hero-slides/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchAdmissionDeadlines() {
  const response = await fetch(`${API_BASE_URL}/admission-deadlines/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchStudentProjects() {
  const response = await fetch(`${API_BASE_URL}/projects/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchAcademicScholars() {
  const response = await fetch(`${API_BASE_URL}/scholars/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchAlumni() {
  const response = await fetch(`${API_BASE_URL}/alumni/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const fetchFacultyResearch = async () => {
  const response = await fetch(`${API_BASE_URL}/faculty-research/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchExtensionPrograms = async () => {
  const response = await fetch(`${API_BASE_URL}/extensions/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchExtensionMetrics = async () => {
  const response = await fetch(`${API_BASE_URL}/extensions/metrics/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchResources = async () => {
  const response = await fetch(`${API_BASE_URL}/resources/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
