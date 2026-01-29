import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from students.models import StudentProject
from faculty.models import FacultyResearchProject, RegularFaculty, FacultyMember

def populate_student_research():
    print("Updating/Populating Student Research...")
    
    # Update existing projects
    projects = StudentProject.objects.all()
    for p in projects:
        # Randomly assign status if not set or default
        if p.status == 'Ongoing': 
            p.status = random.choice(['Ongoing', 'Completed'])
            p.project_type = 'Research' # Ensure they are marked as Research for this context if needed, or keep mixed
            p.save()
            print(f"Updated {p.title} to {p.status}")

    # Create more projects to reach > 10 items
    new_projects = [
        {
            "title": "AI-Driven Traffic Management System",
            "team_members": "Team Alpha",
            "track": "IoT",
            "project_type": "Research",
            "status": "Completed",
            "description": "Using computer vision and IoT sensors to optimize traffic light timings.",
            "technologies": "Python, OpenCV, Raspberry Pi",
            "year_level": "4th Year"
        },
        {
            "title": "Smart Water Quality Monitoring Buoy",
            "team_members": "Team Aqua",
            "track": "IoT",
            "project_type": "Research",
            "status": "Ongoing",
            "description": "Real-time water quality sensing with LoRaWAN connectivity.",
            "technologies": "LoRaWAN, Arduino, Sensors",
            "year_level": "3rd Year"
        },
        {
            "title": "Gesture Controlled Robotic Arm",
            "team_members": "Team Mech",
            "track": "Embedded Systems",
            "project_type": "Research",
            "status": "Completed",
            "description": "Robotic arm controlled by EMG muscle sensors.",
            "technologies": "EMG Sensors, STM32, C++",
            "year_level": "4th Year"
        },
        {
            "title": "Blockchain for Academic Credentials",
            "team_members": "Team Chain",
            "track": "IoT",
            "project_type": "Research",
            "status": "Ongoing",
            "description": "Secure storage and verification of academic records using blockchain.",
            "technologies": "Ethereum, React, Node.js",
            "year_level": "4th Year"
        },
        {
            "title": "Automated Greenhouse System",
            "team_members": "Team Green",
            "track": "IoT",
            "project_type": "Research",
            "status": "Completed",
            "description": "IoT system for regulating temperature and humidity in greenhouses.",
            "technologies": "ESP32, MQTT, Flutter",
            "year_level": "3rd Year"
        },
         {
            "title": "Neural Network Accelerator on FPGA",
            "team_members": "Team Silicon",
            "track": "Embedded Systems",
            "project_type": "Research",
            "status": "Ongoing",
            "description": "Hardware implementation of CNNs for edge inference.",
            "technologies": "Verilog, FPGA, Python",
            "year_level": "4th Year"
        },
        {
            "title": "Smart Waste Management Bin",
            "team_members": "Team Eco",
            "track": "IoT",
            "project_type": "Research",
            "status": "Completed",
            "description": "Ultrasonic sensors to detect fill levels and optimize collection routes.",
            "technologies": "GSM, Arduino, Google Maps API",
            "year_level": "3rd Year"
        }
    ]

    for np in new_projects:
        StudentProject.objects.get_or_create(title=np['title'], defaults=np)
        print(f"Created Student Project: {np['title']}")

def populate_faculty_research():
    print("Populating Faculty Research...")
    FacultyResearchProject.objects.all().delete() # Clear old ones

    # Get some faculty members
    faculty_members = FacultyMember.objects.all()
    if not faculty_members.exists():
        print("No faculty found! Creating dummy faculty for research.")
        lead = FacultyMember.objects.create(id="EMP999", name="Dr. Research Lead", position="Professor", email="lead@test.com")
    
    faculty_list = list(FacultyMember.objects.all())

    research_projects = [
        {
            "title": "IoT Security in Smart Cities",
            "description": "Investigating security protocols and encryption methods for large-scale IoT deployments in urban environments.",
            "status": "Ongoing"
        },
        {
            "title": "Real-Time Embedded Operating Systems",
            "description": "Development of lightweight RTOS for resource-constrained embedded devices.",
            "status": "Completed"
        },
        {
            "title": "Edge Computing for IoT",
            "description": "Optimizing data processing at the edge to reduce latency in IoT applications.",
            "status": "Ongoing"
        },
        {
            "title": "Machine Learning for Signal Processing",
            "description": "Advanced algorithms for noise reduction in industrial sensor networks.",
            "status": "Ongoing"
        },
         {
            "title": "Sustainable Energy Harvesting for WSNs",
            "description": "Developing novel piezoelectric and solar harvesting techniques for wireless sensor nodes.",
            "status": "Completed"
        },
        {
            "title": "5G-Enabled Industrial Automation",
            "description": "Leveraging 5G non-public networks for ultra-reliable low-latency communications in factories.",
            "status": "Ongoing"
        },
         {
            "title": "Cognitive Radio Networks",
            "description": "Dynamic spectrum access techniques for efficient wireless communication.",
            "status": "Completed"
        },
        {
            "title": "AI in Healthcare Diagnostics",
            "description": "Using deep learning to specific anomalies in medical imaging data.",
            "status": "Ongoing"
        }
    ]

    for i, rp in enumerate(research_projects):
        lead = faculty_list[i % len(faculty_list)] # Cycle through faculty
        FacultyResearchProject.objects.create(lead_researcher=lead, **rp)
        print(f"Created Faculty Research: {rp['title']} (Lead: {lead.name})")

if __name__ == '__main__':
    populate_student_research()
    populate_faculty_research()
    print("Population complete.")
