import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from students.models import StudentProject

projects = [
    # 4th Year Capstone Projects
    {
        "title": "Smart Agriculture Monitoring System",
        "team_members": "Juan Dela Cruz, Maria Santos",
        "track": "IoT",
        "year_level": "4th Year",
        "semester": "2023-2024",
        "project_type": "Capstone",
        "description": "An IoT-based system for real-time monitoring of soil moisture, temperature, and crop health using wireless sensors and cloud analytics. The system provides farmers with actionable insights through a mobile application.",
        "technologies": "Arduino, MQTT, Firebase, React, Node.js",
        "awards": "Best Capstone Project 2024, Innovation Award"
    },
    {
        "title": "Automated Home Security with Facial Recognition",
        "team_members": "Carlos Reyes, Anna Lim",
        "track": "Embedded Systems",
        "year_level": "4th Year",
        "semester": "2023-2024",
        "project_type": "Capstone",
        "description": "A security system utilizing embedded cameras and machine learning for facial recognition to control access and monitor home security. Features real-time alerts and cloud-based surveillance storage.",
        "technologies": "Raspberry Pi, OpenCV, Python, TensorFlow, Flask",
        "awards": "Presented at IEEE Conference 2024"
    },
    {
        "title": "Traffic Flow Optimization using Edge Computing",
        "team_members": "Rafael Gomez, Sofia Tan, Miguel Santos",
        "track": "IoT",
        "year_level": "4th Year",
        "semester": "2023-2024",
        "project_type": "Capstone",
        "description": "An intelligent traffic management system that uses edge computing to process real-time traffic data and optimize signal timing. Reduces congestion by 30% in test scenarios.",
        "technologies": "Edge AI, Computer Vision, MQTT, Node-RED, Python",
        "awards": "Outstanding Research Award"
    },
    {
        "title": "Wearable Health Monitoring Device for Elderly Care",
        "team_members": "Patricia Cruz, Daniel Reyes",
        "track": "Embedded Systems",
        "year_level": "4th Year",
        "semester": "2023-2024",
        "project_type": "Capstone",
        "description": "A low-power wearable device that monitors vital signs including heart rate, blood pressure, and fall detection. Automatically alerts caregivers in emergency situations.",
        "technologies": "ARM Cortex, Bluetooth LE, C/C++, Mobile App, Cloud",
        "awards": "Healthcare Innovation Award"
    },

    # 3rd Year Research Projects
    {
        "title": "Blockchain-Based Supply Chain Tracking System",
        "team_members": "Jasmine Flores, Kenneth Torres",
        "track": "IoT",
        "year_level": "3rd Year",
        "semester": "2023-2024",
        "project_type": "Research",
        "description": "A decentralized system using blockchain and IoT sensors to track products throughout the supply chain, ensuring transparency and authenticity.",
        "technologies": "Ethereum, Solidity, IoT Sensors, Web3.js, React",
        "awards": ""
    },
    {
        "title": "Automated Waste Segregation Robot",
        "team_members": "Gabriel Santos, Christine Lim",
        "track": "Embedded Systems",
        "year_level": "3rd Year",
        "semester": "2023-2024",
        "project_type": "Research",
        "description": "A robot that uses computer vision and machine learning to automatically identify and segregate different types of waste materials for recycling purposes.",
        "technologies": "Raspberry Pi, TensorFlow, OpenCV, Servo Motors, Python",
        "awards": "Environmental Innovation Award"
    },
    {
        "title": "Smart Parking Management System",
        "team_members": "Nicole Fernandez, Bryan Garcia",
        "track": "IoT",
        "year_level": "3rd Year",
        "semester": "2023-2024",
        "project_type": "Research",
        "description": "An IoT system that monitors parking space availability in real-time and provides navigation to available spots through a mobile application.",
        "technologies": "Arduino, Ultrasonic Sensors, Firebase, React Native, MQTT",
        "awards": ""
    },
    {
        "title": "Real-Time Air Quality Monitoring Network",
        "team_members": "Marcus Villanueva, Diana Lopez",
        "track": "IoT",
        "year_level": "3rd Year",
        "semester": "2023-2024",
        "project_type": "Research",
        "description": "A distributed network of IoT sensors that measure air quality parameters across the city and provide real-time pollution data through an interactive web dashboard.",
        "technologies": "ESP32, Air Quality Sensors, InfluxDB, Grafana, Node.js",
        "awards": ""
    },

    # Previous Year Projects
    {
        "title": "Autonomous Drone for Disaster Response",
        "team_members": "Alexandra Torres, Vincent Rodriguez",
        "track": "Embedded Systems",
        "year_level": "4th Year",
        "semester": "2022-2023",
        "project_type": "Capstone",
        "description": "An autonomous drone equipped with cameras and sensors for rapid disaster assessment and search-and-rescue operations in hard-to-reach areas.",
        "technologies": "Flight Controller, Computer Vision, GPS, Radio Communication, Python",
        "awards": "Best Innovation Award 2023"
    },
    {
        "title": "Smart Energy Management for Buildings",
        "team_members": "Isabella Gomez, Francis Santiago",
        "track": "IoT",
        "year_level": "4th Year",
        "semester": "2022-2023",
        "project_type": "Capstone",
        "description": "An intelligent system that optimizes energy consumption in commercial buildings using IoT sensors, predictive analytics, and automated control of HVAC and lighting systems.",
        "technologies": "Zigbee, Machine Learning, Cloud Computing, React, Python",
        "awards": "Sustainability Award 2023"
    },
    {
        "title": "Gesture-Controlled Robotic Arm",
        "team_members": "Michelle Bautista, Kenneth Navarro",
        "track": "Embedded Systems",
        "year_level": "4th Year",
        "semester": "2022-2023",
        "project_type": "Capstone",
        "description": "A robotic arm that can be controlled using hand gestures detected by computer vision, designed for assistive technology and industrial automation applications.",
        "technologies": "Arduino, OpenCV, Servo Motors, MediaPipe, Python",
        "awards": ""
    },
    {
        "title": "IoT-Based Flood Monitoring and Early Warning System",
        "team_members": "Gabriel Ramos, Stephanie Garcia",
        "track": "IoT",
        "year_level": "4th Year",
        "semester": "2022-2023",
        "project_type": "Capstone",
        "description": "A comprehensive flood monitoring system using water level sensors and weather data to provide early warnings to communities at risk of flooding.",
        "technologies": "Water Level Sensors, Weather API, SMS Gateway, Web Dashboard, MySQL",
        "awards": "Community Service Award 2023"
    }
]

print("Populating Student Projects...")
StudentProject.objects.all().delete()  # Clear existing to avoid duplicates

for p_data in projects:
    project = StudentProject.objects.create(**p_data)
    print(f"Created project: {project.title}")

print("Student projects populated successfully!")
