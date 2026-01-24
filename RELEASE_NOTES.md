# Release Notes: v8.1 - 2026 Stable 🚀

**Date:** January 24, 2026
**Release Type:** Stable Release

This release focuses on **modernizing the UI**, **securing the contact form**, and **codebase cleanup**.

## ✨ Key Features & Improvements

### 🎨 Design & Layout (Badges)
- **Glassmorphism UI:** Updated the badge gallery with a modern "frosted glass" effect (transparent backgrounds, blur, and subtle borders).
- **Flexbox Refactor:** Replaced legacy float-based layout with a responsive Flexbox system.
- **Improved Alignment:** Fixed badge sizing (uniform 180px width) and spacing issues.
- **Clean Layout:** Removed legacy `clearfix` and spacer divs that caused irregular line breaks.
- **Reordering:** Moved the EC-Council badge to the correct position at the end of the list.

### 📬 Contact Form Upgrade
- **Web3Forms Integration:** Replaced deprecated PageClip with **Web3Forms**.
- **AJAX Submission:** Forms now submit instantly without page reloads.
- **Security Hardening:**
    - **Honeypot Added:** Invisible field to trap and block spam bots automatically.
    - **Input Sanitization:** JavaScript now strips malicious code (XSS prevention) before submission.
    - **Strict Validation:** Regex-based email validation and minimum length checks.
- **Ghost Submission Fix:** Resolved the "double submission" bug by replacing the submit button handler with a secure click listener.

### 🧹 Codebase Cleanup
- **Removed Unused Assets:** Deleted `style-crypto.css`, `ultimate-bg.js`, `green-particles.js`, and old backup files (`.bak`).
- **Optimization:** Removed legacy PageClip scripts and stylesheets from `index.html` and `404.html`.
- **Performance:** Reduced total page weight by removing unused libraries.

## 🐛 Bug Fixes
- Fixed "Domain not supported" error by handling API responses gracefully.
- Fixed layout breakage caused by stray `</div>` tags in the badge section.
- restored `style.css` linking which was briefly interrupted during cleanup.

---
*Developed by Shehan Sanjula*
