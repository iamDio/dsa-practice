# link_problems.py
import os
import json

PROBLEM_ROOT = "problems"
TOPIC_DIR = os.path.join(PROBLEM_ROOT, "by_topic")
PATTERN_DIR = os.path.join(PROBLEM_ROOT, "by_pattern")
METADATA_FILE = "scripts/metadata.json"

def create_symlink(source, dest):
    if not os.path.exists(dest):
        os.symlink(source, dest)
        print(f"🔗 Linked: {dest}")
    else:
        print(f"⚠️ Already exists: {dest}")

def main():
    if not os.path.exists(METADATA_FILE):
        print("❌ metadata.json not found.")
        return
    
    with open(METADATA_FILE) as f:
        problems = json.load(f)
    
    for prob in problems:
        topic_path = os.path.join(TOPIC_DIR, prob["topic_path"], prob["filename"])
        if not os.path.exists(topic_path):
            print(f"❌ Missing source: {topic_path}")
            continue
        for pattern in prob["patterns"]:
            pattern_dir = os.path.join(PATTERN_DIR, pattern)
            os.makedirs(pattern_dir, exist_ok=True)
            dest_link = os.path.join(pattern_dir, prob["filename"])
            source_rel = os.path.relpath(topic_path, pattern_dir)
            create_symlink(source_rel, dest_link)

if __name__ == "__main__":
    main()
├── scripts/metadata.json

[
{
    "filename": "two_sum.py",
    "topic_path": "arrays",
    "patterns": ["two_pointers"]
},
{
    "filename": "reverse_list.py",
    "topic_path": "linked_lists",
    "patterns": ["iteration"]
}
]