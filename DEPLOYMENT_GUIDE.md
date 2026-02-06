# 🚀 GreyCells Technologies - Complete Deployment Guide

**Live Site**: https://rajeshyou-cloud.github.io/greycells/
**Repository**: https://github.com/rajeshyou-cloud/greycells

---

## 📋 Table of Contents
1. [Google Apps Script Backend Setup](#1-google-apps-script-backend)
2. [Project Structure](#2-project-structure)
3. [Local Development](#3-local-development)
4. [Configuration Files](#4-configuration-files)
5. [Core Components](#5-core-components)
6. [All Pages](#6-pages)
7. [GitHub Pages Deployment](#7-deployment)
8. [Operations & Maintenance](#8-operations)

---

## 1. Google Apps Script Backend

### A. Create Google Sheet
1. Go to https://sheets.google.com
2. Create new spreadsheet: **GreyCells Leads**
3. Copy Spreadsheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
   ```

### B. Apps Script Code
1. Go to Extensions > Apps Script
2. Paste the complete code (see BACKEND_CODE.md in repo)
3. Deploy:
   - Deploy > New deployment
   - Type: Web app
   - Execute as: **Me**
   - Access: **Anyone**
4. **Copy Web App URL**: `https://script.google.com/macros/s/YOUR_ID/exec`

### C. Update Frontend
Replace `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` in:
- `src/components/ContactForm.jsx`
- `src/pages/Landing.jsx` (if separate form)

---

## 2. Project Structure

```
greycells/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   ├── SEO.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── data/
│   │   ├── content.js           # All copy + constants
│   │   ├── services.js
│   │   ├── caseStudies.js
│   │   └── blog.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Landing.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Process.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── FAQ.jsx
│   │   └── Resources.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── DEPLOYMENT_GUIDE.md (this file)
```

---

## 3. Local Development

### Quick Start
```bash
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells
npm install
npm run dev
```

Site runs at: `http://localhost:5173/greycells/`

### Build Production
```bash
npm run build
npm run preview  # Test production build locally
```

---

## 4. Configuration Files

See individual code blocks below for complete file contents.

---

## 5. Core Components

All component code is documented in the `src/components/` directory.

Key components:
- **ContactForm.jsx**: Handles Google Sheets submission
- **SEO.jsx**: React Helmet for meta tags
- **Navbar.jsx**: Sticky navigation with CTAs
- **Footer.jsx**: Company info + CTAs

---

## 6. Pages

All 13+ pages implemented:
- ✅ Home
- ✅ Landing (dedicated conversion page)
- ✅ Services
- ✅ Industries
- ✅ Case Studies
- ✅ Process
- ✅ About
- ✅ Blog
- ✅ Careers
- ✅ Contact
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ FAQs
- ✅ Resources

---

## 7. Deployment

### GitHub Pages Setup
1. Go to repo Settings > Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / (root)
4. Save

### GitHub Actions Workflow
The workflow file `.github/workflows/deploy.yml` automatically:
1. Builds the project on every push to `main`
2. Deploys to `gh-pages` branch
3. Site goes live at: https://rajeshyou-cloud.github.io/greycells/

**First deployment**:
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

Wait 2-3 minutes, then visit your site!

---

## 8. Operations

### Update Content
Edit `src/data/content.js` for:
- Company info
- Services
- Testimonials
- CTAs

### Add Blog Post
1. Edit `src/data/blog.js`
2. Add new object to array
3. Commit + push

### View Leads
Open your Google Sheet to see all form submissions in real-time.

### Email Notifications
All submissions trigger an email to: rajeshyou@gmail.com

---

## 🎯 Success Checklist

- [ ] Google Apps Script deployed and tested
- [ ] Web App URL added to ContactForm.jsx
- [ ] All dependencies installed (`npm install`)
- [ ] Local dev server runs (`npm run dev`)
- [ ] Production build successful (`npm run build`)
- [ ] GitHub Actions workflow added
- [ ] First push triggers deployment
- [ ] Site live at GitHub Pages URL
- [ ] Contact form submits to Google Sheets
- [ ] Email notifications working
- [ ] All 13+ pages accessible
- [ ] Mobile responsive (test on phone)
- [ ] SEO tags present (inspect source)
- [ ] Performance > 90 (test with Lighthouse)

---

## 📞 Support

**Company**: GreyCells Technologies, Bangalore
**Email**: hello@greycellstech.com
**Phone**: +91 98807 74315
**Book a Call**: https://calendar.app.google/31YgUYzPYVRUB5yR6

---

*Last Updated: February 6, 2026*
