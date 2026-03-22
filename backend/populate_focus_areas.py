import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from research.models import FocusArea

areas = [
    {
        'name': 'Embedded Systems and Edge Computing Application',
        'slug': 'embedded-systems-edge',
        'description': 'Exploring the hardware-software interfaces and computational models bridging embedded edge nodes with scalable architectures.'
    },
    {
        'name': 'Internet of Things, Artificial Intelligence of Things, and Internet of Everything',
        'slug': 'iot-aiot-ioe',
        'description': 'Investigating pervasive connectivity, machine intelligence at the sensor level, and fully integrated smart-environments.'
    },
    {
        'name': 'Sensor Networks',
        'slug': 'sensor-networks',
        'description': 'Designing and assessing distributed wireless networks, spatial-temporal data gathering, and ultra-low-power transmission protocols.'
    },
    {
        'name': 'Computer Vision and Audio Processing',
        'slug': 'computer-vision-audio',
        'description': 'Developing novel algorithms to interpret, parse, and react dynamically to rich visual streams and complex acoustic data.'
    },
    {
        'name': 'Artificial Intelligence and Machine Learning',
        'slug': 'ai-ml',
        'description': 'Advancing predictive modeling, deep learning architectures, and native neural integrations on resource-constrained devices.'
    }
]

for item in areas:
    FocusArea.objects.get_or_create(slug=item['slug'], defaults={
        'name': item['name'],
        'description': item['description']
    })

print("Focus Areas Successfully Populated!")
