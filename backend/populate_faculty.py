import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from faculty.models import FacultyMember, Publication

# Full dataset from facultyData.ts
data = [
  {
    "id": 'alce-apple',
    "name": 'Alce, Apple Rose B.',
    "position": 'Assistant Professor',
    "email": 'apple.alce@g.msuiit.edu.ph',
    "bio": 'Dr. Alce specializes in embedded systems and wireless sensor networks with applications in agriculture. Her research focuses on developing IoT solutions for precision farming and crop monitoring.',
    "research": ['Embedded Systems', 'Wireless Sensor Networks', 'Microcontrollers', 'Digital Electronics', 'Rice Agriculture'],
    "publications": [
      {
        "title": 'Smart Irrigation System Using Wireless Sensor Networks for Rice Agriculture',
        "year": 2023,
        "venue": 'International Journal of Agricultural Technology',
        "link": 'https://example.com/publication1'
      },
      {
        "title": 'Low-Power Microcontroller Design for Environmental Monitoring',
        "year": 2022,
        "venue": 'IEEE Sensors Conference',
        "link": 'https://example.com/publication2'
      }
    ]
  },
  {
    "id": 'alindayo-leah',
    "name": 'Alindayo, Leah A.',
    "position": 'Assistant Professor',
    "email": 'leah.alindayo@g.msuiit.edu.ph',
    "bio": 'Prof. Alindayo focuses on robotics and autonomous systems, particularly in UAV control and navigation. Her expertise includes artificial intelligence applications in autonomous vehicle systems.',
    "research": ['Robotics', 'AI', 'UAV Control Mechanism', 'Programming and DSP'],
    "publications": [
      {
        "title": 'Autonomous Navigation for UAVs Using Deep Reinforcement Learning',
        "year": 2023,
        "venue": 'International Conference on Robotics and Automation',
        "link": 'https://example.com/publication3'
      },
      {
        "title": 'Digital Signal Processing for Real-Time UAV Control Systems',
        "year": 2022,
        "venue": 'Journal of Robotics Research',
        "link": 'https://example.com/publication4'
      }
    ]
  },
  {
    "id": 'bahinting-mariafe',
    "name": 'Bahinting, Maria Fe P.',
    "position": 'Assistant Professor',
    "email": 'mariafe.bahinting@g.msuiit.edu.ph',
    "bio": 'Prof. Bahinting\'s research centers on the convergence of IoT, artificial intelligence, and robotics. She is particularly interested in developing intelligent systems for industrial automation.',
    "research": ['Internet of Things', 'AI', 'Robotics'],
    "publications": [
      {
        "title": 'AI-Powered IoT Framework for Smart Manufacturing',
        "year": 2024,
        "venue": 'IEEE Internet of Things Journal',
        "link": 'https://example.com/publication5'
      },
      {
        "title": 'Robotic Process Automation in Industry 4.0',
        "year": 2023,
        "venue": 'International Journal of Automation Technology',
        "link": 'https://example.com/publication6'
      }
    ]
  },
  {
    "id": 'caparida-stefany',
    "name": 'Caparida, Stefany Mae V.',
    "position": 'Assistant Professor',
    "email": 'stefany.caparida@g.msuiit.edu.ph',
    "bio": 'Prof. Caparida bridges the gap between technology and entrepreneurship, guiding students in developing innovative tech startups. Her diverse expertise spans from quantum computing to design thinking.',
    "research": ['Technology Entrepreneurship', 'Startups', 'QT C++', 'Internet of Things', 'Design Thinking', 'Data Warehousing', 'Introduction to Quantum Computing'],
    "publications": [
      {
        "title": 'Technology Entrepreneurship Education: A Framework for Innovation',
        "year": 2023,
        "venue": 'Journal of Engineering Education',
        "link": 'https://example.com/publication7'
      },
      {
        "title": 'Quantum Computing Applications in IoT Security',
        "year": 2023,
        "venue": 'International Conference on Quantum Computing',
        "link": 'https://example.com/publication8'
      }
    ]
  },
  {
    "id": 'castor-paul',
    "name": 'Castor, Paul Rodolf P.',
    "position": 'Department Chairman & Assistant Professor',
    "email": 'paulrodolf.castor@g.msuiit.edu.ph',
    "bio": 'Dr. Castor leads the Computer Applications Department with extensive expertise in embedded systems and IoT. His research focuses on environmental monitoring systems and real-time embedded solutions.',
    "research": ['Air Quality', 'Embedded Systems Design and Programming', 'Firmware Development', 'Internet of Things', 'Mechatronics', 'Real-time Operating System (RTOS)', 'Wireless Sensor Networks (WSN)', 'Microprocessor Designing'],
    "publications": [
      {
        "title": 'Real-Time Air Quality Monitoring System Using WSN and IoT',
        "year": 2024,
        "venue": 'IEEE Transactions on Environmental Monitoring',
        "link": 'https://example.com/publication9'
      },
      {
        "title": 'RTOS Design Patterns for Embedded Systems',
        "year": 2023,
        "venue": 'ACM Transactions on Embedded Computing Systems',
        "link": 'https://example.com/publication10'
      },
      {
        "title": 'Firmware Development Best Practices for IoT Devices',
        "year": 2022,
        "venue": 'International Conference on Embedded Systems',
        "link": 'https://example.com/publication11'
      }
    ]
  },
  {
    "id": 'empig-ernesto',
    "name": 'Empig, Ernesto E.',
    "position": 'Professor',
    "email": 'ernesto.empig@g.msuiit.edu.ph',
    "bio": 'Prof. Empig is a distinguished researcher in ICT for sustainable development and environmental computing. His work focuses on leveraging technology to address climate change and achieve sustainable development goals.',
    "research": ['ICT for Sustainable Development', 'Environmental Computing', 'Social Network Analysis', 'Information and Communication Technology', 'Sustainable Development', 'Virtual Classroom', 'Sustainable Development Goal', 'Climate Change'],
    "publications": [
      {
        "title": 'ICT Solutions for Climate Change Mitigation in Developing Countries',
        "year": 2024,
        "venue": 'Journal of Sustainable Development',
        "link": 'https://example.com/publication12'
      },
      {
        "title": 'Social Network Analysis for Environmental Awareness Campaigns',
        "year": 2023,
        "venue": 'International Journal of Environmental Research',
        "link": 'https://example.com/publication13'
      },
      {
        "title": 'Virtual Learning Environments for Sustainable Education',
        "year": 2022,
        "venue": 'Computers & Education',
        "link": 'https://example.com/publication14'
      }
    ]
  },
  {
    "id": 'halibas-jerry',
    "name": 'Halibas, Jerry B.',
    "position": 'Assistant Professor',
    "email": 'jerry.halibas@g.msuiit.edu.ph',
    "bio": 'Prof. Halibas brings practical industry experience to the classroom, focusing on software development and computer applications.',
    "research": [],
    "publications": []
  },
  {
    "id": 'jondonero-excel',
    "name": 'Jondonero, Excel Van O.',
    "position": 'Instructor',
    "email": 'excelvan.jondonero@g.msuiit.edu.ph',
    "bio": 'Mr. Jondonero is dedicated to teaching foundational computer applications and programming courses.',
    "research": [],
    "publications": []
  },
  {
    "id": 'marajas-antonio',
    "name": 'Marajas, Antonio S.',
    "position": 'Professor',
    "email": 'antonio.marajas@g.msuiit.edu.ph',
    "bio": 'Prof. Marajas is a senior faculty member with decades of experience in computer science education.',
    "research": [],
    "publications": []
  },
  {
    "id": 'papolonias-juffil',
    "name": 'Papolonias, Juffil B.',
    "position": 'Instructor',
    "email": 'juffil.papolonias@g.msuiit.edu.ph',
    "bio": 'Mr. Papolonias specializes in teaching programming and software development courses.',
    "research": [],
    "publications": []
  },
  {
    "id": 'sudaria-phoebe',
    "name": 'Sudaria, Phoebe Ruth Alithea B.',
    "position": 'Assistant Professor',
    "email": 'phoeberuthalithea.sudaria@g.msuiit.edu.ph',
    "bio": 'Prof. Sudaria focuses on computer applications and information systems.',
    "research": [],
    "publications": []
  },
  {
    "id": 'villanueva-jomari',
    "name": 'Villanueva, Jomari Francis B.',
    "position": 'Assistant Professor',
    "email": 'jomarifrancis.villanueva@g.msuiit.edu.ph',
    "bio": 'Prof. Villanueva specializes in machine learning applications for IoT systems, developing intelligent solutions for smart environments.',
    "research": ['Internet of Things', 'Machine Learning'],
    "publications": [
      {
        "title": 'Machine Learning Models for Predictive Maintenance in IoT Systems',
        "year": 2024,
        "venue": 'IEEE Internet of Things Journal',
        "link": 'https://example.com/publication15'
      },
      {
        "title": 'Edge AI for Smart Home Automation',
        "year": 2023,
        "venue": 'Journal of Ambient Intelligence and Smart Environments',
        "link": 'https://example.com/publication16'
      }
    ]
  },
  {
    "id": 'pepito-collien',
    "name": 'Pepito, Collien Princess Camingawan',
    "position": 'Lecturer',
    "email": 'collienprincess.pepito@g.msuiit.edu.ph',
    "bio": 'Ms. Pepito is a dedicated lecturer focusing on foundational computer applications courses.',
    "research": [],
    "publications": []
  }
]

for item in data:
    f, created = FacultyMember.objects.get_or_create(
        id=item['id'],
        defaults={
            'name': item['name'],
            'position': item['position'],
            'email': item['email'],
            'bio': item.get('bio', ''),
            'research_interests': item.get('research', [])
        }
    )
    if created:
        print(f"Created {f.name}")
        for pub in item.get('publications', []):
            Publication.objects.create(
                faculty=f,
                title=pub['title'],
                year=pub.get('year', 2023),
                venue=pub.get('venue', 'Unknown'),
                link=pub.get('link', '')
            )
    else:
        print(f"Already exists {f.name}")
