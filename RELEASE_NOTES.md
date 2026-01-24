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
