// API service for backend communication
const API_BASE_URL = 'http://localhost:8000/api';

const handleListResponse = async (response: Response, errorMsg: string) => {
  if (!response.ok) throw new Error(errorMsg);
  const data = await response.json();
  // Handle Django REST Framework pagination (returns { count, next, previous, results: [] })
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  // Handle standard array response
  if (Array.isArray(data)) {
    return data;
  }
  // Fallback for non-array responses (though unexpected for list endpoints)
  return data;
};

// Faculty API
export const facultyAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/faculty/`);
    return handleListResponse(response, 'Failed to fetch faculty');
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
    return handleListResponse(response, 'Failed to fetch news');
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
    return handleListResponse(response, 'Failed to fetch events');
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
    return handleListResponse(response, 'Failed to fetch programs');
  },
  getProgram: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/curriculum/programs/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch program');
    return response.json();
  },
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses/`);
    return handleListResponse(response, 'Failed to fetch courses');
  },
};

// Admissions API
export const admissionsAPI = {
  getPrograms: async () => {
    const response = await fetch(`${API_BASE_URL}/admissions/programs/`);
    return handleListResponse(response, 'Failed to fetch programs');
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
    return handleListResponse(response, 'Failed to fetch facilities');
  },
  getFAQs: async () => {
    const response = await fetch(`${API_BASE_URL}/faqs/`);
    return handleListResponse(response, 'Failed to fetch FAQs');
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
// Students API
export const studentsAPI = {
  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/students/projects/`);
    return handleListResponse(response, 'Failed to fetch student projects');
  },
  getOrganizations: async () => {
    const response = await fetch(`${API_BASE_URL}/students/organizations/`);
    return handleListResponse(response, 'Failed to fetch student organizations');
  },
  getAchievements: async () => {
    const response = await fetch(`${API_BASE_URL}/students/achievements/`);
    return handleListResponse(response, 'Failed to fetch student achievements');
  },
};

// Alumni API
export const alumniAPI = {
  getProfiles: async () => {
    const response = await fetch(`${API_BASE_URL}/alumni/profiles/`);
    return handleListResponse(response, 'Failed to fetch alumni profiles');
  },
};

// Research API
export const researchAPI = {
  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/research/projects/`);
    return handleListResponse(response, 'Failed to fetch research projects');
  },
  getAchievements: async () => {
    const response = await fetch(`${API_BASE_URL}/research/achievements/`);
    return handleListResponse(response, 'Failed to fetch research achievements');
  },
};

// Extension API
export const extensionAPI = {
  getPrograms: async () => {
    const response = await fetch(`${API_BASE_URL}/extension/programs/`);
    return handleListResponse(response, 'Failed to fetch extension programs');
  },
  getImpacts: async () => {
    const response = await fetch(`${API_BASE_URL}/extension/impacts/`);
    return handleListResponse(response, 'Failed to fetch extension impacts');
  },
};

// Resources API
export const resourcesAPI = {
  getFiles: async (category?: string) => {
    const url = category
      ? `${API_BASE_URL}/resources/files/?category=${category}`
      : `${API_BASE_URL}/resources/files/`;
    const response = await fetch(url);
    return handleListResponse(response, 'Failed to fetch resources');
  },
};

// Career Services API
export const careerServicesAPI = {
  getPaths: async () => {
    const response = await fetch(`${API_BASE_URL}/career-services/paths/`);
    return handleListResponse(response, 'Failed to fetch career paths');
  },
};
