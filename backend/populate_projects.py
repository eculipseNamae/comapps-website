import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from students.models import StudentProject

StudentProject.objects.all().delete() # wiping test data

projects = [
    {
        'title': 'Smart City Waste Management IoT System',
        'description': 'An intelligent IoT-based garbage bin monitoring system that optimizes waste collection routes.',
        'team_members': 'Alice Smith, Bob Jones, Prof. Garcia (Adviser)',
        'technologies': 'Arduino, Raspberry Pi, React, Node.js',
        'year_level': '4th Year',
        'track': 'IoT',
        'is_masters': False,
        'project_type': 'Project'
    },
    {
        'title': 'Autonomous Warehouse Robot',
        'description': 'A small-scale embedded robot for autonomous pathfinding and inventory scanning.',
        'team_members': 'Charlie Brown, Diane Lee',
        'technologies': 'C++, ROS, Embedded Linux',
        'year_level': '3rd Year',
        'track': 'Embedded Systems',
        'is_masters': False,
        'project_type': 'Project'
    },
    {
        'title': 'Advanced Neural Networks for Edge Devices',
        'description': 'A masters level implementation of compressed neural networks running natively on ESP32 microcontrollers.',
        'team_members': 'Evan Wright',
        'technologies': 'TensorFlow Lite, ESP-IDF, Python',
        'is_masters': True,
        'year_level': '',
        'track': '',
        'project_type': 'Project'
    },
    {
        'title': 'Low-Power Environmental Sensor Node',
        'description': 'Designing an ultra-low power sensor node that survives for years on a single coin battery.',
        'team_members': 'Fiona Gallagher',
        'technologies': 'Zephyr RTOS, BLE, Nordic nRF52',
        'year_level': '2nd Year',
        'track': '',
        'is_masters': False,
        'project_type': 'Project'
    },
    {
        'title': 'Blockchain-Based Secure IoT Firmware Updates',
        'description': 'A scalable architecture for distributing OTA firmware updates securely using distributed ledgers.',
        'team_members': 'George Harris, Hector Villa',
        'technologies': 'Solidity, ESP8266, FreeRTOS',
        'year_level': '4th Year',
        'track': 'IoT',
        'is_masters': False,
        'project_type': 'Project'
    },
    {
        'title': 'Real-Time Biometric Security Access Control',
        'description': 'An embedded system integrating fingerprint matching and live facial detection directly on an ARM Cortex processor.',
        'team_members': 'Iris West, Jack Dawson',
        'technologies': 'OpenCV, C, ARM Cortex-M4',
        'year_level': '3rd Year',
        'track': 'Embedded Systems',
        'is_masters': False,
        'project_type': 'Project'
    }
]

for p in projects:
    StudentProject.objects.create(**p)

# We also need 4 Research entries so the UI doesn't break.
research = [
    {
        'title': 'Optimizing RTOS Schedulers for Heavy IoT Loads',
        'description': 'A detailed analysis on preemption mechanisms in modern real-time operating systems.',
        'team_members': 'Kyle Rayner',
        'technologies': 'FreeRTOS, Performance Analysis',
        'is_masters': True,
        'project_type': 'Research'
    },
    {
        'title': 'Vulnerability Assessment of Standard MQTT Implementations',
        'description': 'Research highlighting critical security flaws when unencrypted MQTT is deployed in smart homes.',
        'team_members': 'Lois Lane',
        'technologies': 'Wireshark, Python, Mosquitto',
        'year_level': '4th Year',
        'track': 'IoT',
        'project_type': 'Research'
    },
    {
        'title': 'Energy Harvesting Efficiency in Wearable Tech',
        'description': 'Investigating thermoelectric and piezoelectric combinations for continuous body sensing.',
        'team_members': 'Morty Smith',
        'technologies': 'Hardware Design, Simulation',
        'year_level': '4th Year',
        'track': 'Embedded Systems',
        'project_type': 'Research'
    },
    {
        'title': 'Latency Benchmarks of Edge AI vs Cloud AI',
        'description': 'Comprehensive testing of local inference latency versus standard cloud relay pipelines.',
        'team_members': 'Nora Allen',
        'technologies': 'Edge TPU, AWS IoT',
        'is_masters': True,
        'project_type': 'Research'
    }
]

for r in research:
    StudentProject.objects.create(**r)

print("Dummy data successfully populated!")
