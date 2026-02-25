import csv
import os

output_dir = "src/content/tools"
os.makedirs(output_dir, exist_ok=True)

# Update template to use 'company'
template = """---
name: "{name}"
bucket: "{bucket}"
url: "{url}"
cost: "{cost}"
company: "{company}"
description: "{description}"
---
"""

try:
    with open("tools.csv", "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # 1. Clean URL
            raw_url = row['url'].strip()
            if raw_url and not raw_url.startswith(('http://', 'https://')):
                clean_url = f"https://{raw_url}"
            else:
                clean_url = raw_url

            # 2. Clean Bucket
            clean_bucket = row['bucket'].strip()
            
            # 3. Handle Company (Default to DIM&C if empty)
            # Use .get() to be safe if column is missing
            clean_company = row.get('company', 'DIM&C').strip() or 'DIM&C'

            data = {
                "name": row['name'].strip(),
                "bucket": clean_bucket,
                "url": clean_url,
                "cost": row['cost'].strip(),
                "company": clean_company,
                "description": row['description'].strip()
            }

            filename = data['name'].lower().replace(" ", "-").replace("/", "").replace(".", "") + ".md"
            filepath = os.path.join(output_dir, filename)
            
            with open(filepath, "w") as md_file:
                md_file.write(template.format(**data))
            print(f"✅ Created {filename}")

except FileNotFoundError:
    print("❌ Could not find 'tools.csv'.")