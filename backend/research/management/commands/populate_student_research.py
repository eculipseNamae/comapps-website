import os
import django
from django.core.management.base import BaseCommand
from students.models import StudentProject, StudentProjectPublication, StudentProjectPresentation

class Command(BaseCommand):
    help = 'Populates placeholder student research projects'

    def handle(self, *args, **kwargs):
        # Clear existing to avoid duplicate conflicts for tests
        StudentProject.objects.filter(project_type='Research').delete()

        projects = [
            {
                'title': 'AI-Powered Smart Grid Energy Optimizer',
                'team_members': 'John Doe, Jane Smith, Dr. Alan Turing (Adviser)',
                'track': 'IoT',
                'project_type': 'Research',
                'status': 'Completed',
                'abstract': 'This research presents an AI-driven approach to optimize energy distribution in smart grids. Using a reinforcement learning agent trained on historical consumption data, we observed a 15% improvement in load balancing efficiency compared to traditional deterministic algorithms.',
                'description': 'A comprehensive study and implementation of reinforcement learning for energy routing.',
                'technologies': 'Python, PyTorch, React, Node.js',
                'presentations': ['International Conference on Smart Cities 2025', 'Global AI Symposium 2026'],
                'publications': [
                    {'journal': 'Journal of Energy Technology', 'link': 'https://example.com/smart-grid-research'},
                    {'journal': 'IEEE Transactions on Smart Grid', 'link': 'https://ieee.org/smart-grid'}
                ]
            },
            {
                'title': 'Low-Power Edge Computing for Remote Healthcare',
                'team_members': 'Emily Chen, Mark Johnson, Dr. Grace Hopper (Adviser)',
                'track': 'Embedded Systems',
                'project_type': 'Research',
                'status': 'Ongoing',
                'abstract': 'Investigating ultra-low power microcontrollers for continuous patient monitoring. This ongoing research focuses on minimizing the power draw of wearable health monitors while maintaining real-time data transmission reliability over BLE.',
                'description': 'Designing custom PCBs and firmware for wearable health monitors.',
                'technologies': 'C++, FreeRTOS, ESP32, Altium Designer',
                'publications': []
            },
            {
                'title': 'Automated IoT Hydroponics Monitoring System',
                'team_members': 'Kevin Reyes, Sarah Lee, Prof. Ada Lovelace (Adviser)',
                'track': 'IoT',
                'project_type': 'Research',
                'status': 'Completed',
                'abstract': 'An automated hydroponics monitoring system utilizing an array of IoT sensors to track pH, EC, water temperature, and humidity. It features a dashboard for real-time visualization and alert triggers for non-optimal conditions.',
                'description': 'End-to-end IoT platform for agricultural monitoring and automation.',
                'technologies': 'Arduino, Raspberry Pi, Vue.js, MongoDB',
                'presentations': ['AgriTech Symposium 2024'],
                'publications': [
                    {'journal': 'Agricultural Automation Quarterly', 'link': 'https://example.com/agritech-hydro'}
                ]
            }
        ]

        for p in projects:
            pub_data = p.pop('publications', [])
            pres_data = p.pop('presentations', [])
            project, created = StudentProject.objects.get_or_create(
                title=p['title'],
                defaults=p
            )
            
            for pub in pub_data:
                StudentProjectPublication.objects.get_or_create(
                    project=project,
                    journal_name=pub['journal'],
                    link=pub['link']
                )
                
            for pres in pres_data:
                StudentProjectPresentation.objects.get_or_create(
                    project=project,
                    conference_name=pres
                )

            if created:
                self.stdout.write(self.style.SUCCESS(f'Created project: {p["title"]}'))
            else:
                self.stdout.write(self.style.SUCCESS(f'Updated project: {p["title"]}'))
