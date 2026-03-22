import urllib.request
import json
import sys

def dump(url, filename):
    try:
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode('utf-8'))
            with open(filename, "w") as f:
                json.dump(data, f, indent=2)
    except Exception as e:
        print(f"Error on {url}: {e}")

dump("http://localhost:8000/api/student-projects/", "st_out.json")
dump("http://localhost:8000/api/faculty/", "fac_out.json")
