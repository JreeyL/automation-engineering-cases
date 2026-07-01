import os
import shutil
import subprocess

base_dir = r"g:\Projects\automation-engineering-cases"
temp_dir = os.path.join(base_dir, "temp-app")

# 1. Create next app in temp-app
print("Running create-next-app...")
cmd = ["npx", "-y", "create-next-app@latest", "temp-app", "--typescript", "--tailwind", "--eslint", "--app", "--src-dir", "--import-alias", "@/*", "--use-npm"]
subprocess.run(cmd, cwd=base_dir, check=True, shell=True)

# 2. Move temp-app contents to base_dir
print("Moving files from temp-app...")
for item in os.listdir(temp_dir):
    src = os.path.join(temp_dir, item)
    dst = os.path.join(base_dir, item)
    if os.path.exists(dst):
        if os.path.isdir(dst):
            shutil.rmtree(dst)
        else:
            os.remove(dst)
    shutil.move(src, dst)

os.rmdir(temp_dir)

# 3. Create src/data and public/images
src_data = os.path.join(base_dir, "src", "data")
public_images = os.path.join(base_dir, "public", "images")
os.makedirs(src_data, exist_ok=True)
os.makedirs(public_images, exist_ok=True)

# 4. Move JSON files to src/data
json_files = ["companies.json", "mv-vfd-applications.json", "images.json"]
for jf in json_files:
    src = os.path.join(base_dir, jf)
    if os.path.exists(src):
        shutil.move(src, os.path.join(src_data, jf))

# Move everything from data folder to src/data
old_data = os.path.join(base_dir, "data")
if os.path.exists(old_data):
    for item in os.listdir(old_data):
        shutil.move(os.path.join(old_data, item), os.path.join(src_data, item))
    os.rmdir(old_data)

# 5. Move everything from images folder to public/images
old_images = os.path.join(base_dir, "images")
if os.path.exists(old_images):
    for item in os.listdir(old_images):
        shutil.move(os.path.join(old_images, item), os.path.join(public_images, item))
    os.rmdir(old_images)

# 6. Install additional dependencies
print("Installing additional dependencies...")
subprocess.run(["npm", "install", "lucide-react", "clsx", "tailwind-merge"], cwd=base_dir, check=True, shell=True)

print("Setup complete.")
