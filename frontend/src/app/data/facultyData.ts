export interface FacultyMember {
  id: string;
  name: string;
  position: string;
  research: string[];
  email: string;
  bio?: string;
  networks?: {
    linkedin?: string;
    researchgate?: string;
    googleScholar?: string;
    orcid?: string;
  };
  publications?: {
    title: string;
    year: number;
    venue: string;
    link: string;
  }[];
}

export const facultyData: FacultyMember[] = [
  {
    id: 'alce-apple',
    name: 'Alce, Apple Rose B.',
    position: 'Assistant Professor',
    research: ['Embedded Systems', 'Wireless Sensor Networks', 'Microcontrollers', 'Digital Electronics', 'Rice Agriculture'],
    email: 'apple.alce@g.msuiit.edu.ph',
    bio: 'Dr. Alce specializes in embedded systems and wireless sensor networks with applications in agriculture. Her research focuses on developing IoT solutions for precision farming and crop monitoring.',
    networks: {
      googleScholar: 'https://scholar.google.com',
      researchgate: 'https://www.researchgate.net'
    },
    publications: [
      {
        title: 'Smart Irrigation System Using Wireless Sensor Networks for Rice Agriculture',
        year: 2023,
        venue: 'International Journal of Agricultural Technology',
        link: 'https://example.com/publication1'
      },
      {
        title: 'Low-Power Microcontroller Design for Environmental Monitoring',
        year: 2022,
        venue: 'IEEE Sensors Conference',
        link: 'https://example.com/publication2'
      }
    ]
  },
  {
    id: 'alindayo-leah',
    name: 'Alindayo, Leah A.',
    position: 'Assistant Professor',
    research: ['Robotics', 'AI', 'UAV Control Mechanism', 'Programming and DSP'],
    email: 'leah.alindayo@g.msuiit.edu.ph',
    bio: 'Prof. Alindayo focuses on robotics and autonomous systems, particularly in UAV control and navigation. Her expertise includes artificial intelligence applications in autonomous vehicle systems.',
    networks: {
      linkedin: 'https://www.linkedin.com',
      googleScholar: 'https://scholar.google.com'
    },
    publications: [
      {
        title: 'Autonomous Navigation for UAVs Using Deep Reinforcement Learning',
        year: 2023,
        venue: 'International Conference on Robotics and Automation',
        link: 'https://example.com/publication3'
      },
      {
        title: 'Digital Signal Processing for Real-Time UAV Control Systems',
        year: 2022,
        venue: 'Journal of Robotics Research',
        link: 'https://example.com/publication4'
      }
    ]
  },
  {
    id: 'bahinting-mariafe',
    name: 'Bahinting, Maria Fe P.',
    position: 'Assistant Professor',
    research: ['Internet of Things', 'AI', 'Robotics'],
    email: 'mariafe.bahinting@g.msuiit.edu.ph',
    bio: 'Prof. Bahinting\'s research centers on the convergence of IoT, artificial intelligence, and robotics. She is particularly interested in developing intelligent systems for industrial automation.',
    networks: {
      researchgate: 'https://www.researchgate.net',
      googleScholar: 'https://scholar.google.com'
    },
    publications: [
      {
        title: 'AI-Powered IoT Framework for Smart Manufacturing',
        year: 2024,
        venue: 'IEEE Internet of Things Journal',
        link: 'https://example.com/publication5'
      },
      {
        title: 'Robotic Process Automation in Industry 4.0',
        year: 2023,
        venue: 'International Journal of Automation Technology',
        link: 'https://example.com/publication6'
      }
    ]
  },
  {
    id: 'caparida-stefany',
    name: 'Caparida, Stefany Mae V.',
    position: 'Assistant Professor',
    research: ['Technology Entrepreneurship', 'Startups', 'QT C++', 'Internet of Things', 'Design Thinking', 'Data Warehousing', 'Introduction to Quantum Computing'],
    email: 'stefany.caparida@g.msuiit.edu.ph',
    bio: 'Prof. Caparida bridges the gap between technology and entrepreneurship, guiding students in developing innovative tech startups. Her diverse expertise spans from quantum computing to design thinking.',
    networks: {
      linkedin: 'https://www.linkedin.com',
      researchgate: 'https://www.researchgate.net'
    },
    publications: [
      {
        title: 'Technology Entrepreneurship Education: A Framework for Innovation',
        year: 2023,
        venue: 'Journal of Engineering Education',
        link: 'https://example.com/publication7'
      },
      {
        title: 'Quantum Computing Applications in IoT Security',
        year: 2023,
        venue: 'International Conference on Quantum Computing',
        link: 'https://example.com/publication8'
      }
    ]
  },
  {
    id: 'castor-paul',
    name: 'Castor, Paul Rodolf P.',
    position: 'Department Chairman & Assistant Professor',
    research: ['Air Quality', 'Embedded Systems Design and Programming', 'Firmware Development', 'Internet of Things', 'Mechatronics', 'Real-time Operating System (RTOS)', 'Wireless Sensor Networks (WSN)', 'Microprocessor Designing'],
    email: 'paulrodolf.castor@g.msuiit.edu.ph',
    bio: 'Dr. Castor leads the Computer Applications Department with extensive expertise in embedded systems and IoT. His research focuses on environmental monitoring systems and real-time embedded solutions.',
    networks: {
      linkedin: 'https://www.linkedin.com',
      googleScholar: 'https://scholar.google.com',
      researchgate: 'https://www.researchgate.net',
      orcid: 'https://orcid.org'
    },
    publications: [
      {
        title: 'Real-Time Air Quality Monitoring System Using WSN and IoT',
        year: 2024,
        venue: 'IEEE Transactions on Environmental Monitoring',
        link: 'https://example.com/publication9'
      },
      {
        title: 'RTOS Design Patterns for Embedded Systems',
        year: 2023,
        venue: 'ACM Transactions on Embedded Computing Systems',
        link: 'https://example.com/publication10'
      },
      {
        title: 'Firmware Development Best Practices for IoT Devices',
        year: 2022,
        venue: 'International Conference on Embedded Systems',
        link: 'https://example.com/publication11'
      }
    ]
  },
  {
    id: 'empig-ernesto',
    name: 'Empig, Ernesto E.',
    position: 'Professor',
    research: ['ICT for Sustainable Development', 'Environmental Computing', 'Social Network Analysis', 'Information and Communication Technology', 'Sustainable Development', 'Virtual Classroom', 'Sustainable Development Goal', 'Climate Change'],
    email: 'ernesto.empig@g.msuiit.edu.ph',
    bio: 'Prof. Empig is a distinguished researcher in ICT for sustainable development and environmental computing. His work focuses on leveraging technology to address climate change and achieve sustainable development goals.',
    networks: {
      googleScholar: 'https://scholar.google.com',
      researchgate: 'https://www.researchgate.net',
      orcid: 'https://orcid.org'
    },
    publications: [
      {
        title: 'ICT Solutions for Climate Change Mitigation in Developing Countries',
        year: 2024,
        venue: 'Journal of Sustainable Development',
        link: 'https://example.com/publication12'
      },
      {
        title: 'Social Network Analysis for Environmental Awareness Campaigns',
        year: 2023,
        venue: 'International Journal of Environmental Research',
        link: 'https://example.com/publication13'
      },
      {
        title: 'Virtual Learning Environments for Sustainable Education',
        year: 2022,
        venue: 'Computers & Education',
        link: 'https://example.com/publication14'
      }
    ]
  },
  {
    id: 'halibas-jerry',
    name: 'Halibas, Jerry B.',
    position: 'Assistant Professor',
    research: [],
    email: 'jerry.halibas@g.msuiit.edu.ph',
    bio: 'Prof. Halibas brings practical industry experience to the classroom, focusing on software development and computer applications.',
    networks: {
      linkedin: 'https://www.linkedin.com'
    },
    publications: []
  },
  {
    id: 'jondonero-excel',
    name: 'Jondonero, Excel Van O.',
    position: 'Instructor',
    research: [],
    email: 'excelvan.jondonero@g.msuiit.edu.ph',
    bio: 'Mr. Jondonero is dedicated to teaching foundational computer applications and programming courses.',
    networks: {
      linkedin: 'https://www.linkedin.com'
    },
    publications: []
  },
  {
    id: 'marajas-antonio',
    name: 'Marajas, Antonio S.',
    position: 'Professor',
    research: [],
    email: 'antonio.marajas@g.msuiit.edu.ph',
    bio: 'Prof. Marajas is a senior faculty member with decades of experience in computer science education.',
    networks: {
      googleScholar: 'https://scholar.google.com'
    },
    publications: []
  },
  {
    id: 'papolonias-juffil',
    name: 'Papolonias, Juffil B.',
    position: 'Instructor',
    research: [],
    email: 'juffil.papolonias@g.msuiit.edu.ph',
    bio: 'Mr. Papolonias specializes in teaching programming and software development courses.',
    networks: {
      linkedin: 'https://www.linkedin.com'
    },
    publications: []
  },
  {
    id: 'sudaria-phoebe',
    name: 'Sudaria, Phoebe Ruth Alithea B.',
    position: 'Assistant Professor',
    research: [],
    email: 'phoeberuthalithea.sudaria@g.msuiit.edu.ph',
    bio: 'Prof. Sudaria focuses on computer applications and information systems.',
    networks: {
      linkedin: 'https://www.linkedin.com',
      researchgate: 'https://www.researchgate.net'
    },
    publications: []
  },
  {
    id: 'villanueva-jomari',
    name: 'Villanueva, Jomari Francis B.',
    position: 'Assistant Professor',
    research: ['Internet of Things', 'Machine Learning'],
    email: 'jomarifrancis.villanueva@g.msuiit.edu.ph',
    bio: 'Prof. Villanueva specializes in machine learning applications for IoT systems, developing intelligent solutions for smart environments.',
    networks: {
      linkedin: 'https://www.linkedin.com',
      googleScholar: 'https://scholar.google.com',
      researchgate: 'https://www.researchgate.net'
    },
    publications: [
      {
        title: 'Machine Learning Models for Predictive Maintenance in IoT Systems',
        year: 2024,
        venue: 'IEEE Internet of Things Journal',
        link: 'https://example.com/publication15'
      },
      {
        title: 'Edge AI for Smart Home Automation',
        year: 2023,
        venue: 'Journal of Ambient Intelligence and Smart Environments',
        link: 'https://example.com/publication16'
      }
    ]
  }
];

export const lecturersData: FacultyMember[] = [
  {
    id: 'pepito-collien',
    name: 'Pepito, Collien Princess Camingawan',
    position: 'Lecturer',
    research: [],
    email: 'collienprincess.pepito@g.msuiit.edu.ph',
    bio: 'Ms. Pepito is a dedicated lecturer focusing on foundational computer applications courses.',
    networks: {
      linkedin: 'https://www.linkedin.com'
    },
    publications: []
  }
];

export interface StaffMember {
  id: string;
  name: string;
  position: string;
  email: string;
}

export const staffData: StaffMember[] = [
  {
    id: 'odvina-cendy',
    name: 'Odvina, Cendy Lou',
    position: 'Department Secretary',
    email: 'cendylou.odvina@g.msuiit.edu.ph'
  }
];
