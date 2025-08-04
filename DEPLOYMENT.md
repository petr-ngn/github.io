# GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages.

## 🚀 Quick Start

### 1. Repository Setup
Your repository `petr-ngn/github.io` is configured as a **User Pages site**.

Push your local code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/petr-ngn/github.io.git
git push -u origin main
```

### 2. User Pages vs Project Pages
This configuration is for a **User Pages site** (`username.github.io`):

- **Homepage**: `https://petr-ngn.github.io` (no subdirectory)
- **Router**: No basename needed (serves from root)
- **pathSegmentsToKeep**: 0 (no project path)

If you ever switch to a Project Pages site, you would need:

**package.json:**
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

**src/App.tsx:**
```jsx
<Router basename="/YOUR_REPOSITORY_NAME">
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

## 📦 Deployment Options

### Option 1: Automatic Deployment (Recommended)
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your app when you push to `main` branch
- Deploy to GitHub Pages
- Handle all the configuration

Simply push your changes:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Option 2: Manual Deployment
You can also deploy manually using the npm script:
```bash
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Deploy to the `gh-pages` branch

## 🔧 Configuration Details

### Files Modified for GitHub Pages:

1. **package.json**
   - Added `homepage` field
   - Added `gh-pages` dependency
   - Added deployment scripts

2. **src/App.tsx**
   - Added `basename` to BrowserRouter for proper routing

3. **public/index.html**
   - Updated title and meta description
   - Added SPA GitHub Pages redirect script

4. **public/404.html**
   - Handles client-side routing on GitHub Pages

5. **.github/workflows/deploy.yml**
   - Automated deployment workflow

## 🌐 Accessing Your Site

After deployment, your site will be available at:
```
https://petr-ngn.github.io
```

This is your **primary GitHub Pages site** - it will be served directly from the root domain.

## 🛠️ Troubleshooting

### Common Issues:

1. **404 on refresh/direct URL access**
   - The `404.html` and redirect script should handle this
   - Make sure both files are in the `public` folder

2. **Assets not loading**
   - Verify the `homepage` field in `package.json` matches your repository
   - Check the `basename` in `src/App.tsx`

3. **Build fails**
   - Run `npm run build` locally to check for errors
   - Fix any TypeScript or linting issues

4. **GitHub Actions failing**
   - Check the Actions tab in your GitHub repository
   - Ensure GitHub Pages is enabled in repository settings

### Commands for Development:

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Test production build locally
npx serve -s build
```

## 📝 Additional Notes

- The site uses client-side routing, so the 404.html redirect is essential
- Changes to the main branch will automatically trigger a new deployment
- The build process optimizes assets for production
- All modern browsers are supported

## 🔄 Making Updates

To update your deployed site:
1. Make your changes locally
2. Test with `npm start`
3. Commit and push to main branch
4. GitHub Actions will automatically deploy the changes

Your portfolio is now ready for the world! 🎉