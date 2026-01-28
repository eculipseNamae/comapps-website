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


export async function fetchNews() {
  const response = await fetch(`${API_BASE_URL}/news/`);
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
