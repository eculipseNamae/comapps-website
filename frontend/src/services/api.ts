// API service for backend communication
const API_BASE_URL = 'http://localhost:8000/api';

// Faculty API
export const facultyAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/faculty/`);
    if (!response.ok) throw new Error('Failed to fetch faculty');
    return response.json();
  },
  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/faculty/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch faculty');
    return response.json();
  },
};

// News API
export const newsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/news/`);
    if (!response.ok) throw new Error('Failed to fetch news');
    return response.json();
  },
  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/news/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch news');
    return response.json();
  },
};

// Events API
export const eventsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/events/`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },
  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },
};

// Curriculum API
export const curriculumAPI = {
  getPrograms: async () => {
    const response = await fetch(`${API_BASE_URL}/curriculum/programs/`);
    if (!response.ok) throw new Error('Failed to fetch programs');
    return response.json();
  },
  getProgram: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/curriculum/programs/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch program');
    return response.json();
  },
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses/`);
    if (!response.ok) throw new Error('Failed to fetch courses');
    return response.json();
  },
};

// Admissions API
export const admissionsAPI = {
  getPrograms: async () => {
    const response = await fetch(`${API_BASE_URL}/admissions/programs/`);
    if (!response.ok) throw new Error('Failed to fetch programs');
    return response.json();
  },
  getProgram: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/admissions/programs/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch program');
    return response.json();
  },
};

// Department API
export const departmentAPI = {
  getInfo: async () => {
    const response = await fetch(`${API_BASE_URL}/department/`);
    if (!response.ok) throw new Error('Failed to fetch department info');
    const data = await response.json();
    return data.results?.[0] || data;
  },
  getFacilities: async () => {
    const response = await fetch(`${API_BASE_URL}/facilities/`);
    if (!response.ok) throw new Error('Failed to fetch facilities');
    return response.json();
  },
  getFAQs: async () => {
    const response = await fetch(`${API_BASE_URL}/faqs/`);
    if (!response.ok) throw new Error('Failed to fetch FAQs');
    return response.json();
  },
};

// Contact Inquiry API
export const inquiriesAPI = {
  submit: async (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/inquiries/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit inquiry');
    return response.json();
  },
};
