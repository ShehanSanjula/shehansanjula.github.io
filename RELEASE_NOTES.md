# Release Notes: v8.3 - 2026 Stable 🚀

## 🎨 Seasonal Animations & Mobile Optimization
- **Mobile De-cluttering:** Completely removed seasonal animations from mobile versions (`window.innerWidth <= 768`) to ensure a lightweight and distraction-free mobile browsing experience. Sticking those animations as they are on desktop, laptop, and computer screens.
- **Dedicated Poson Theme:** Separated Vesak (May) and Poson (June) logic. Poson now uses the same beautiful hanging lanterns and bottom lotus scene, but displays its own greeting: `"Pinwantha Poson Mangalyayak Wewa!"`.

## ⚙️ Documentation & Workflows
- Updated `README.md` version badges and split Vesak & Poson badges.
- Updated release notes template in `.github/workflows/release.yml`.

---

# Release Notes: v8.2 - 2026 Stable 🔒

## 🛡️ Security Enhancements
### Content Security Policy (CSP) Implementation
- **Strict Header Injection:** Implemented an automated Python script (`.github/scripts/inject_headers.py`) to inject comprehensive CSP meta tags into all HTML files during deployment.
- **Permissive Mode:** Adopted a permissive yet secure CSP strategy (`default-src 'self' https: data:`) to ensure seamless integration of external widgets (Cloudinary, Credly, etc.) while preventing mixed content attacks.
- **Referrer-Policy:** Added `strict-origin-when-cross-origin` to enhance user privacy.

### ⚙️ CI/CD Automation
- **GitHub Actions Workflow:** Created a robust deployment pipeline (`security-tags.yml`) that automatically handles security injection and deployment to GitHub Pages.

## ⚡ Performance & Stability
- **Attempted Optimization:** explored "Lazy Loading" and "Critical CSS" techniques.
- **Stability First:** Reverted aggressive performance tweaks to maintain 100% visual integrity and stability of the layout.

---

# Release Notes: v8.1 - 2026 Stable 🚀

## ✨ Key Features & Improvements

### 🎨 Design & Layout (Badges)
- **Glassmorphism UI:** Updated the badge gallery with a modern "frosted glass" effect (transparent backgrounds, blur, and subtle borders).
- **Flexbox Refactor:** Replaced legacy float-based layout with a responsive Flexbox system.
- **Improved Alignment:** Fixed badge sizing (uniform 180px width) and spacing issues.
- **Clean Layout:** Removed legacy `clearfix` and spacer divs that caused irregular line breaks.

### 📬 Contact Form Upgrade
- **Security Hardening:**
    - **Honeypot Added:** Invisible field to trap and block spam bots automatically.
    - **Input Sanitization:** JavaScript now strips malicious code (XSS prevention) before submission.
    - **Strict Validation:** Regex-based email validation and minimum length checks.
- **Ghost Submission Fix:** Resolved the "double submission" bug.

### 🧹 Codebase Cleanup
- General maintenance and removal of unused files to improve project structure and performance.

## 🐛 Bug Fixes
- Fixed "Domain not supported" error by handling API responses gracefully.
- Fixed layout breakage caused by stray `</div>` tags in the badge section.
- Restored `style.css` linking.
