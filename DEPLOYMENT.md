# GitHub Pages Deployment Guide

## Your website is ready! Follow these steps to deploy:

### Step 1: Create a GitHub Repository (if not already done)

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `geology-consultancy` or `website`)
4. Keep it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPOSITORY_NAME` with your repository name

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub will build and deploy your site (takes 1-2 minutes)
- You'll see a message: "Your site is published at..."
- Your live URL will be: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

### Step 5: Verify Your Site

1. Click the provided URL or visit it in your browser
2. Test on both desktop and mobile
3. Verify all sections load correctly

---

## Quick Command Reference

```bash
# Check current status
git status

# View remote repository
git remote -v

# Make changes and update
git add .
git commit -m "Update website"
git push origin main
```

---

## Troubleshooting

### Issue: 404 Error on GitHub Pages
- Wait 2-3 minutes after enabling Pages
- Check that the branch is set to `main` in Settings > Pages
- Verify files are in the root directory

### Issue: Styles not loading
- All paths are relative, so this shouldn't happen
- Clear browser cache and hard reload (Ctrl+Shift+R)

### Issue: Can't push to GitHub
- Make sure you've created the repository on GitHub
- Check that the remote URL is correct: `git remote -v`
- You may need to authenticate (use Personal Access Token)

---

## Next Steps After Deployment

1. **Custom Domain** (optional):
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider

2. **Analytics** (optional):
   - Add Google Analytics code to `index.html`

3. **Contact Form Backend** (optional):
   - Integrate with Formspree, Netlify Forms, or similar service

---

## Need Help?

If you encounter any issues:
1. Check the GitHub Pages documentation
2. Verify all files are committed: `git status`
3. Check GitHub Actions tab for build errors

Your website is production-ready and optimized for GitHub Pages! 🚀
