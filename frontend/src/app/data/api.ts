export const API_BASE_URL = import.meta.env.PROD ? '/api' : 'http://localhost:8000/api';

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

export async function fetchStudentProject(id: string) {
  const response = await fetch(`${API_BASE_URL}/projects/${id}/`);
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

export const fetchFacultyProject = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/faculty-research/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchResearchSettings = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/research-settings/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) return data[0];
    if (data.results && data.results.length > 0) return data.results[0];
    return null;
  } catch (error) {
    console.error("Error fetching research settings:", error);
    return null;
  }
};

export const fetchFocusAreas = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/focus-areas/`);
    if (!response.ok) throw new Error('Failed to fetch focus areas');
    return await response.json();
  } catch (error) {
    console.error("Error fetching focus areas:", error);
    throw error;
  }
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

export const fetchCollaborators = async () => {
  const response = await fetch(`${API_BASE_URL}/collaborators/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export interface UnifiedPublication {
  id: string;
  title: string;
  authors: string;
  type: 'Journal' | 'Conference';
  year: string;
  venue: string;
  link: string;
  source: 'Faculty' | 'Student';
}

export const fetchAllUnifiedPublications = async (): Promise<UnifiedPublication[]> => {
  const [faculty, students] = await Promise.all([
    fetchFaculty(),
    fetchStudentProjects()
  ]);

  const unified: UnifiedPublication[] = [];

  const facultyList = Array.isArray(faculty) ? faculty : faculty.results || [];
  facultyList.forEach((member: any) => {
    if (member.publications && Array.isArray(member.publications)) {
      member.publications.forEach((pub: any) => {
        unified.push({
          id: `fac-pub-${pub.id}`,
          title: pub.title,
          authors: member.name,
          type: pub.venue.toLowerCase().includes('conference') ? 'Conference' : 'Journal',
          year: pub.year ? pub.year.toString() : 'N/A',
          venue: pub.venue,
          link: pub.link,
          source: 'Faculty'
        });
      });
    }
  });

  const studentList = Array.isArray(students) ? students : students.results || [];
  studentList.forEach((project: any) => {
    const authors = Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '');
    const projYear = project.semester ? project.semester.split('-')[0] : 'N/A';

    if (project.publications && Array.isArray(project.publications)) {
      project.publications.forEach((pub: any, idx: number) => {
        unified.push({
          id: `stu-pub-${project.id}-${idx}`,
          title: project.title,
          authors: authors,
          type: 'Journal',
          year: projYear,
          venue: pub.journal_name || 'Unknown Journal',
          link: pub.link || '',
          source: 'Student'
        });
      });
    }

    if (project.presentations && Array.isArray(project.presentations)) {
      project.presentations.forEach((pres: string, idx: number) => {
        unified.push({
          id: `stu-pres-${project.id}-${idx}`,
          title: project.title,
          authors: authors,
          type: 'Conference',
          year: projYear,
          venue: pres,
          link: '',
          source: 'Student'
        });
      });
    }
  });

  return unified.sort((a, b) => b.year.localeCompare(a.year));
};
