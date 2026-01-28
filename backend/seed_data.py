import os
import django
from datetime import date, time

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from faculty.models import Faculty
from news.models import NewsItem, Event
from curriculum.models import Program as CurriculumProgram, Year, Semester, Course
from admissions.models import Program as AdmissionsProgram, ApplicationStage, ApplicationRequirement
from department.models import Department, Facility, FAQ
from students.models import StudentProject, StudentOrganization, StudentAchievement
from alumni.models import AlumniProfile
from research.models import ResearchProject, ResearchAchievement
from extension.models import ExtensionProgram, ExtensionImpact
from resources.models import ResourceFile
from career_services.models import CareerPath

# Clear existing data
print("Clearing existing data...")
ExtensionImpact.objects.all().delete()
ExtensionProgram.objects.all().delete()
ResearchProject.objects.all().delete()
ResearchAchievement.objects.all().delete()
StudentProject.objects.all().delete()
StudentOrganization.objects.all().delete()
StudentAchievement.objects.all().delete()
AlumniProfile.objects.all().delete()
ResourceFile.objects.all().delete()
CareerPath.objects.all().delete()
Faculty.objects.all().delete()
NewsItem.objects.all().delete()
Event.objects.all().delete()
CurriculumProgram.objects.all().delete()
AdmissionsProgram.objects.all().delete()
Department.objects.all().delete()
Facility.objects.all().delete()
FAQ.objects.all().delete()

# Create Faculty
print("Creating faculty...")
faculty_data = [
    {
        'name': 'Alce, Apple Rose B.',
        'position': 'Assistant Professor',
        'research_interests': ['Embedded Systems', 'Wireless Sensor Networks', 'Microcontrollers', 'Digital Electronics', 'Rice Agriculture'],
        'email': 'apple.alce@g.msuiit.edu.ph',
    },
    {
        'name': 'Alindayo, Leah A.',
        'position': 'Assistant Professor',
        'research_interests': ['Robotics', 'AI', 'UAV Control Mechanism', 'Programming and DSP'],
        'email': 'leah.alindayo@g.msuiit.edu.ph',
    },
    {
        'name': 'Bahinting, Maria Fe P.',
        'position': 'Assistant Professor',
        'research_interests': ['Internet of Things', 'AI', 'Robotics'],
        'email': 'mariafe.bahinting@g.msuiit.edu.ph',
    },
    {
        'name': 'Caparida, Stefany Mae V.',
        'position': 'Assistant Professor',
        'research_interests': ['Technology Entrepreneurship', 'Startups', 'QT C++', 'Internet of Things', 'Design Thinking', 'Data Warehousing', 'Introduction to Quantum Computing'],
        'email': 'stefany.caparida@g.msuiit.edu.ph',
    },
    {
        'name': 'Castor, Paul Rodolf P.',
        'position': 'Department Chairman & Assistant Professor',
        'research_interests': ['Air Quality', 'Embedded Systems Design and Programming', 'Firmware Development', 'Internet of Things', 'Mechatronics', 'Real-time Operating System (RTOS)', 'Wireless Sensor Networks (WSN)', 'Microprocessor Designing'],
        'email': 'paulrodolf.castor@g.msuiit.edu.ph',
    },
]

for faculty in faculty_data:
    Faculty.objects.create(**faculty)

# Create News Items
print("Creating news items...")
news_data = [
    {
        'title': 'Graduation Ceremony 2026 - Celebrating Excellence',
        'date': date(2026, 1, 15),
        'category': 'event',
        'content': 'The Computer Applications Department proudly celebrates the achievements of 120 graduating students. This year\'s batch showed exceptional performance in IoT and Embedded Systems, with several students receiving awards for outstanding capstone projects.',
        'image': 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        'featured': True,
    },
    {
        'title': 'New State-of-the-Art IoT Laboratory Officially Opens',
        'date': date(2026, 1, 10),
        'category': 'facility',
        'content': 'Our newly inaugurated IoT Laboratory features cutting-edge equipment including 50 development kits, advanced sensors, and cloud integration platforms. The facility will enhance hands-on learning experiences for students specializing in Internet of Things.',
        'image': 'https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        'title': 'ComApps Students Win National Hackathon Championship',
        'date': date(2026, 1, 5),
        'category': 'achievement',
        'content': 'A team of four ComApps students developed an innovative smart farming solution that won first place at the National Tech Innovation Hackathon, competing against 50 teams from universities nationwide. The solution uses IoT sensors and machine learning for precision agriculture.',
        'image': 'https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    },
]

for news in news_data:
    NewsItem.objects.create(**news)

# Create Events
print("Creating events...")
event_data = [
    {'title': 'Tech Talk: AI in IoT', 'date': date(2026, 2, 5), 'time': time(14, 0), 'venue': 'Main Auditorium'},
    {'title': 'Student Research Symposium', 'date': date(2026, 2, 15), 'time': time(9, 0), 'venue': 'ComApps Building'},
    {'title': 'Industry Job Fair', 'date': date(2026, 2, 20), 'time': time(10, 0), 'venue': 'University Gym'},
    {'title': 'Embedded Systems Workshop', 'date': date(2026, 3, 1), 'time': time(13, 0), 'venue': 'Embedded Lab'},
    {'title': 'ComApps Week 2026', 'date': date(2026, 3, 10), 'time': time(8, 0), 'venue': 'Various Locations'},
    {'title': 'Hackathon: Smart Solutions', 'date': date(2026, 3, 22), 'time': time(0, 0), 'venue': 'Innovation Hub'},
]

for event in event_data:
    event['description'] = f"Join us for {event['title']}"
    Event.objects.create(**event)

# Create Curriculum Programs
print("Creating curriculum programs...")
bs_program = CurriculumProgram.objects.create(
    name='BS Computer Applications',
    level='undergraduate',
    description='A comprehensive 4-year undergraduate program focusing on computer applications, embedded systems, and IoT technologies.',
    duration_years=4,
    total_units=120,
)

# Create Years and Semesters
for year_num in range(1, 5):
    year = Year.objects.create(program=bs_program, number=year_num)
    for sem_num in range(1, 3):
        Semester.objects.create(year=year, number=sem_num)

# Create Admissions Programs
print("Creating admissions programs...")
undergrad_program = AdmissionsProgram.objects.create(
    name='BS Computer Applications',
    level='undergraduate',
    description='A comprehensive 4-year undergraduate program focusing on computer applications, embedded systems, and IoT technologies.',
    application_deadline=date(2026, 4, 30),
    tuition_fee=50000.00,
    slots_available=100,
    requirements=['High School Diploma', 'NMAT Score', 'Valid ID', 'Certificate of Good Moral Character']
)

# Create Application Stages
stages = [
    {'name': 'Submit Online Application', 'description': 'Complete the online application form and upload required documents through our admissions portal.', 'order': 1},
    {'name': 'Entrance Examination', 'description': 'Take the entrance exam to assess your readiness for the program.', 'order': 2},
    {'name': 'Submit Documents', 'description': 'Submit all required documents including transcripts, recommendations, and certificates.', 'order': 3},
    {'name': 'Interview', 'description': 'Attend an interview with the admissions committee.', 'order': 4},
    {'name': 'Decision', 'description': 'Receive your admission decision via email.', 'order': 5},
]

for stage in stages:
    stage['program'] = undergrad_program
    ApplicationStage.objects.create(**stage)

# Create Application Requirements
requirements = [
    {'name': 'High School Diploma', 'description': 'Official high school transcript and diploma', 'is_required': True},
    {'name': 'NMAT Score', 'description': 'National Medical Admission Test or equivalent entrance exam score', 'is_required': True},
    {'name': 'Valid ID', 'description': 'Any government-issued identification', 'is_required': True},
    {'name': 'Certificate of Good Moral Character', 'description': 'From your previous school', 'is_required': True},
]

for req in requirements:
    req['program'] = undergrad_program
    ApplicationRequirement.objects.create(**req)

# Create Department Info
print("Creating department information...")
Department.objects.create(
    name='Computer Applications Department',
    description='The Department of Computer Applications at Mindanao State University - Iligan Institute of Technology offers world-class education in computer applications with specializations in IoT and Embedded Systems.',
    vision='To produce globally competitive computer applications professionals who are capable of addressing real-world challenges through innovative technology solutions.',
    mission='To provide quality education and training in computer applications, fostering research, innovation, and community engagement.',
    location='Mindanao State University - Iligan Institute of Technology, Tibanga Highway, Iligan City, Lanao del Norte, Philippines 9200',
    phone='+63 (063) 223 8641',
    email='comapps@msuiit.edu.ph',
    website='https://msuiit.edu.ph',
)

# Create Facilities
print("Creating facilities...")
facilities = [
    {
        'name': 'IoT Laboratory',
        'description': 'State-of-the-art laboratory equipped with IoT devices, sensors, microcontrollers, and development boards for hands-on learning.',
        'location': 'ComApps Building, 3rd Floor',
        'features': ['50 IoT Development Kits', 'Advanced Sensors', 'Cloud Integration Platforms', 'Wireless Communication Setup']
    },
    {
        'name': 'Embedded Systems Lab',
        'description': 'Specialized lab for embedded systems design and programming with FPGA, DSP, and microcontroller development boards.',
        'location': 'ComApps Building, 2nd Floor',
        'features': ['FPGA Development Boards', 'DSP Processors', 'Microcontroller Kits', 'Logic Analyzers']
    },
    {
        'name': 'Computer Network Lab',
        'description': 'Modern networking laboratory with routers, switches, and servers for network design and management training.',
        'location': 'ComApps Building, 1st Floor',
        'features': ['Network Switches', 'Routers', 'Servers', 'Network Monitoring Tools']
    },
]

for facility in facilities:
    Facility.objects.create(**facility)

# Create FAQs
print("Creating FAQs...")
faqs = [
    {'question': 'What is the admission process?', 'answer': 'Submit an online application, take the entrance exam, provide required documents, and wait for the admission decision. The entire process typically takes 2-4 weeks.', 'category': 'admissions', 'order': 1},
    {'question': 'What are the career prospects?', 'answer': 'Graduates work as embedded systems engineers, IoT developers, firmware engineers, and systems designers in various industries including tech, manufacturing, and telecommunications.', 'category': 'career', 'order': 2},
    {'question': 'Do you offer scholarships?', 'answer': 'Yes, we offer merit-based and need-based scholarships. Contact the admissions office for more information.', 'category': 'admissions', 'order': 3},
    {'question': 'What is the curriculum focus?', 'answer': 'Our curriculum emphasizes IoT, Embedded Systems, Firmware Development, and Computer Applications with both theoretical and practical training.', 'category': 'curriculum', 'order': 4},
]

for faq in faqs:
    FAQ.objects.create(**faq)

# Create Student Data
print("Creating student data...")
StudentOrganization.objects.create(
    name='Junior Philippine Computer Society (JPCS)',
    description='JPCS is the official student organization for Computer Applications students. It aims to provide members with opportunities to enhance their skills, network with professionals, and participate in tech events.',
    president='John Doe',
    adviser='Prof. Paul Rodolf Castor',
    founded_year=2010
)

StudentProject.objects.create(
    title='Smart Irrigation System using IoT',
    description='An automated irrigation system that monitors soil moisture levels and controls water flow using IoT sensors and actuators. This project aims to optimize water usage in agriculture.',
    students_involved='Juan dela Cruz, Maria Clara',
    advisor='Prof. Apple Rose Alce',
    year_completed=2025,
    featured=True
)

StudentAchievement.objects.create(
    title='Best Capstone Project 2025',
    description='Awarded to the team behind the Smart Irrigation System for their outstanding contribution to agricultural technology.',
    date=date(2025, 5, 20),
    recipient='Team Agrotech',
    category='academic'
)

# Create Alumni Data
print("Creating alumni data...")
AlumniProfile.objects.create(
    name='Jane Smith',
    batch_year=2015,
    current_position='Senior IoT Engineer',
    company='Tech Giants Inc.',
    testimonial='The ComApps program provided me with the solid foundation and hands-on experience I needed to succeed in the fast-paced world of IoT.',
    featured=True
)

# Create Research Data
print("Creating research data...")
ResearchProject.objects.create(
    title='LoRaWAN-based Environmental Monitoring',
    abstract='This research investigates the improved range and power consumption of LoRaWAN networks for environmental monitoring in dense urban areas.',
    authors='Prof. Paul Rodolf Castor, Prof. Leah Alindayo',
    category='faculty',
    publication_date=date(2024, 11, 15),
    journal_or_conference='International Journal of Sensor Networks'
)

ResearchAchievement.objects.create(
    title='Outstanding Research Award',
    description='Received for the LoRaWAN environmental monitoring project at the Regional Research Conference.',
    date=date(2024, 12, 10),
    awarding_body='Regional Science & Technology Council'
)

# Create Extension Data
print("Creating extension data...")
ext_prog = ExtensionProgram.objects.create(
    title='Digital Literacy for Rural Communities',
    description='A series of workshops designed to teach basic computer skills and internet literacy to residents of remote barangays.',
    status='ongoing',
    start_date=date(2025, 1, 10),
    location='Barangay Digkilaan',
    beneficiaries='Local Residents'
)

ExtensionImpact.objects.create(
    program=ext_prog,
    metric='Participants Trained',
    value='50',
    description='Number of residents who completed the basic computer skills workshop.'
)

# Create Resources Data
print("Creating resources data...")
ResourceFile.objects.create(
    title='Thesis Format Guidelines',
    description='Official guidelines for undergraduate thesis formatting and submission.',
    category='research_thesis',
    external_link='https://docs.google.com/document/d/example'
)

ResourceFile.objects.create(
    title='Enrollment Form',
    description='Standard enrollment form for new students.',
    category='academic_form',
    external_link='https://docs.google.com/document/d/example-form'
)

# Create Career Services Data
print("Creating career services data...")
CareerPath.objects.create(
    title='IoT Developer',
    description='Develops applications and systems that connect devices to the internet. Requires strong skills in programming, networking, and hardware interfacing.',
    skills_required='Python, C++, MQTT, Embedded Systems, Cloud Platforms',
    potential_employers='Smart Home Companies, Industrial Automation Firms, AgriTech Startups',
    salary_range='30k-60k'
)

CareerPath.objects.create(
    title='Embedded Systems Engineer',
    description='Designs and implements software for embedded devices. Involves working with microcontrollers, RTOS, and low-level programming.',
    skills_required='C, Assembly, RTOS, Digital Electronics, PCB Design',
    potential_employers='Semiconductor Companies, Automotive Industry, Consumer Electronics',
    salary_range='35k-70k'
)

print("✅ Seed data successfully created!")
