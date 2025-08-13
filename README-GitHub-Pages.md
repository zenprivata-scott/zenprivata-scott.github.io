# GitHub Pages Deployment Guide

## Setup Instructions

Your ZenPrivata website is now ready for GitHub Pages deployment. Here's how to set it up:

### 1. Repository Setup
1. Create a new repository on GitHub
2. Push this project to your GitHub repository

### 2. GitHub Pages Configuration
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/docs" folder
6. Click "Save"

### 3. Important Notes

#### Static Site Limitations
Since GitHub Pages only serves static files, the following features have been adapted:

- **Contact Forms**: The current contact form uses backend APIs that won't work on GitHub Pages. You'll need to:
  - Use a service like Netlify Forms, Formspree, or EmailJS
  - Or integrate with GitHub Issues API for contact submissions

#### Files Structure
- **Production files**: Located in `/docs` folder (built from `/client` source)
- **Source files**: Located in `/client` folder (development files)
- **Build command**: `npm run build` creates the production files

#### Automated Deployment (Optional)
The included GitHub Actions workflow (`.github/workflows/deploy.yml`) can automatically build and deploy your site when you push to the main branch. To use this:

1. Go to repository Settings → Pages
2. Change source to "GitHub Actions"
3. The workflow will handle building and deployment automatically

### 4. Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `/docs` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages

### 5. Local Development
To continue developing locally:
```bash
npm install
npm run dev
```

Then build for production:
```bash
npm run build
```

The built files will be updated in the `/docs` folder, ready for GitHub Pages.

## Contact Form Solutions

✓ **Forms Updated**: The contact forms have been updated to use Formspree, a free form handling service.

### Form Configuration:
- **Contact Form**: Uses Formspree endpoint for direct email delivery
- **Lead Magnet Form**: Downloads PDF immediately and captures leads via Formspree
- **Free Service**: Formspree offers 50 free submissions per month

### Formspree Setup:
1. The forms are pre-configured with Formspree endpoints
2. Submissions will be sent to the configured email addresses
3. Users receive immediate feedback and PDF downloads work automatically

No additional setup required - the forms are ready to use on GitHub Pages!

## Single Page Application (SPA) Support

✓ **Routing Fixed**: Added SPA redirect handling for GitHub Pages to fix 404 errors on page navigation.

### SPA Configuration:
- **404.html**: Redirects any missing routes back to the main app
- **Client-side routing**: Wouter router handles all navigation within the app
- **URL preservation**: Direct links to pages like `/services` or `/contact` work correctly

This ensures users can bookmark and share direct links to any page on your website.