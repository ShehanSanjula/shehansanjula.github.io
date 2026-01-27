import os

# Define the security headers
# Note: Using distinct string concatenation for readability
csp = (
    "default-src 'self'; "
    "script-src 'self' 'unsafe-inline' https://kit.fontawesome.com https://images.dmca.com "
    "https://static.cloudflareinsights.com https://cdnjs.cloudflare.com https://www.googletagmanager.com "
    "https://www.clarity.ms https://cdn.jsdelivr.net https://res.cloudinary.com https://*.credly.com "
    "https://*.youracclaim.com; "
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com "
    "https://cdn.jsdelivr.net https://kit.fontawesome.com; "
    "font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com https://kit.fontawesome.com; "
    "img-src 'self' data: https://res.cloudinary.com https://images.dmca.com https://www.google-analytics.com "
    "https://*.clarity.ms https://c.bing.com https://cdn.credly.com https://*.youracclaim.com "
    "https://*.blogspot.com https://drive.google.com; "
    "media-src 'self' https://res.cloudinary.com; "
    "connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://c.bing.com "
    "https://www.googletagmanager.com https://sentry.io; "
    "frame-src 'self' https://www.credly.com https://www.youracclaim.com; "
    "object-src 'none'; "
    "base-uri 'self'"
)

# Meta tags to inject
injection_content = (
    f'    <meta http-equiv="Content-Security-Policy" content="{csp}">\n'
    '    <meta name="referrer" content="strict-origin-when-cross-origin">'
)

print("Starting security header injection...")

files_processed = 0
files_injected = 0

# Walk through the current directory
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".html"):
            files_processed += 1
            path = os.path.join(root, file)
            print(f"Processing: {path}")
            
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                # Check if headers are already there to avoid duplication (simple check)
                if "Content-Security-Policy" in content:
                    print(f"  Skipping {path}: CSP already present or injected.")
                    continue

                if "<head>" in content:
                    # Inject after <head> tag
                    new_content = content.replace("<head>", f"<head>\n{injection_content}")
                    
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"  [SUCCESS] Injected headers into {path}")
                    files_injected += 1
                else:
                    print(f"  [WARNING] No <head> tag found in {path}")
            except Exception as e:
                print(f"  [ERROR] Failed to process {path}: {e}")

print(f"Injection complete. Processed {files_processed} files. Injected {files_injected} files.")
