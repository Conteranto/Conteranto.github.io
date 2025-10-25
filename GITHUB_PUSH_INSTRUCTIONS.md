# Step-by-Step Instructions: Push to GitHub and Host on GitHub Pages

**New Repository:** https://github.com/Conteranto/Conteranto.github.io

---

## ✅ Pre-Push Checklist

### Files Status:

**✓ WILL BE IGNORED (Not pushed to GitHub):**
- `.claude/` - Claude Code configuration
- `.DS_Store` - macOS system file
- `Conteranto.png` and `Conteranto 2.png` - Duplicate logo files
- `Conteranto - Imminent grant/` - Internal grant documents
- `assets/css/styles.css` - Legacy CSS (deprecated)
- `assets/js/script.js` - Legacy JS (deprecated)

**✓ WILL BE PUSHED (Website files):**
- `index.html` - Main website
- `assets/` - All CSS, JS, and images (except legacy files)
- `README.md` - Project documentation
- `LICENSE` - License file
- `COLOR_AND_ALIGNMENT_AUDIT.md` - Audit documentation
- `CONTRIBUTING.md` - Contribution guidelines
- `DEPLOYMENT.md` - Deployment guide
- `QUICK_START.md` - Quick start guide
- `RESTRUCTURE_SUMMARY.md` - Restructure documentation

---

## 📋 Step-by-Step Instructions

### Step 1: Remove Old Git Repository

```bash
# Navigate to your project folder
cd /Users/hadimohammadi/Documents/Conteranto

# Remove the old git repository
rm -rf .git
```

**What this does:** Removes the old git history so you can start fresh with the new repository.

---

### Step 2: Initialize New Git Repository

```bash
# Initialize a new git repository
git init
```

**Expected output:**
```
Initialized empty Git repository in /Users/hadimohammadi/Documents/Conteranto/.git/
```

---

### Step 3: Add All Website Files

```bash
# Add all files (gitignore will exclude the right files)
git add .
```

**What this does:** Stages all your website files for commit. The `.gitignore` file automatically excludes Claude files, system files, and legacy files.

---

### Step 4: Verify What Will Be Committed

```bash
# Check what files are staged
git status
```

**Expected output:** You should see a list of files to be committed. Make sure:
- ✅ `index.html` is included
- ✅ `assets/css/main.css` is included
- ✅ `assets/js/main.js` is included
- ✅ All image files in `assets/images/` are included
- ❌ `.claude/` is NOT listed
- ❌ `.DS_Store` is NOT listed
- ❌ `assets/css/styles.css` is NOT listed (legacy file)
- ❌ `assets/js/script.js` is NOT listed (legacy file)

**If you see legacy files or Claude files, run:**
```bash
# Remove them from staging
git rm --cached assets/css/styles.css assets/js/script.js
```

---

### Step 5: Create Your First Commit

```bash
# Commit all files with a message
git commit -m "Initial commit: Conteranto website v2.0

- Modular CSS and JS architecture
- Enhanced Research section with typography-focused design
- WCAG 2.1 AA compliant color contrast
- Responsive design for all devices
- Complete documentation and guides"
```

**Expected output:**
```
[main (root-commit) abc1234] Initial commit: Conteranto website v2.0
 XX files changed, XXXX insertions(+)
 create mode 100644 index.html
 ...
```

---

### Step 6: Rename Branch to 'main' (if needed)

```bash
# Rename the branch to 'main' (GitHub's default)
git branch -M main
```

**What this does:** Ensures your branch is named `main` (some systems use `master` by default).

---

### Step 7: Connect to GitHub Repository

```bash
# Add the remote repository
git remote add origin https://github.com/Conteranto/Conteranto.github.io.git
```

**What this does:** Links your local repository to the GitHub repository.

---

### Step 8: Push to GitHub

```bash
# Push your code to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX KiB | XX.XX MiB/s, done.
Total XX (delta X), reused 0 (delta 0), pack-reused 0
To https://github.com/Conteranto/Conteranto.github.io.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**If prompted for credentials:**
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (not your GitHub password)
  - Generate token at: https://github.com/settings/tokens
  - Required permissions: `repo` (full control of private repositories)

---

### Step 9: Enable GitHub Pages

1. Go to your repository: https://github.com/Conteranto/Conteranto.github.io
2. Click on **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**

**Expected result:**
```
Your site is ready to be published at https://conteranto.github.io/
```

---

### Step 10: Wait for Deployment (1-2 minutes)

GitHub Pages takes 1-2 minutes to build and deploy your site.

**Check deployment status:**
1. Go to **Actions** tab in your repository
2. You should see a workflow called "pages build and deployment"
3. Wait for the green checkmark ✓

---

### Step 11: Verify Your Live Website

Open your browser and visit:

**🌐 https://conteranto.github.io/**

You should see your Conteranto website live!

---

## 🔄 Future Updates (After Initial Setup)

When you make changes to your website:

```bash
# 1. Check what changed
git status

# 2. Add the changed files
git add .

# 3. Commit with a descriptive message
git commit -m "Update: describe your changes here"

# 4. Push to GitHub
git push origin main
```

GitHub Pages will automatically update your live site within 1-2 minutes.

---

## 🆘 Troubleshooting

### Problem: "Permission denied" when pushing

**Solution:** You need to set up authentication

**Option 1: Use Personal Access Token**
```bash
# When prompted for password, use your Personal Access Token
# Generate at: https://github.com/settings/tokens
```

**Option 2: Use SSH**
```bash
# Change remote URL to SSH
git remote set-url origin git@github.com:Conteranto/Conteranto.github.io.git
```

### Problem: "Repository not found"

**Solution:** Check your repository URL
```bash
# Verify remote URL
git remote -v

# If wrong, update it
git remote set-url origin https://github.com/Conteranto/Conteranto.github.io.git
```

### Problem: Website not showing after deployment

**Solutions:**
1. Wait 2-3 minutes for GitHub Pages to build
2. Check the Actions tab for build errors
3. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
4. Clear browser cache

### Problem: Legacy files showing in repository

**Solution:** Remove them from git tracking
```bash
# Remove legacy files
git rm --cached assets/css/styles.css assets/js/script.js

# Commit the removal
git commit -m "Remove legacy files"

# Push changes
git push origin main
```

---

## 📝 Summary

**Your website will be live at:** https://conteranto.github.io/

**Total steps:** 11 steps
**Estimated time:** 5-10 minutes
**Deployment time:** 1-2 minutes after pushing

**Files being deployed:**
- ✅ Modern modular architecture (CSS + JS)
- ✅ Enhanced Research section
- ✅ All images and assets
- ✅ Complete documentation
- ❌ No Claude files
- ❌ No legacy files
- ❌ No internal documents

---

## ✅ Verification Checklist

After completing all steps, verify:

- [ ] Repository shows only website files on GitHub
- [ ] No `.claude/` folder visible
- [ ] No `Conteranto.png` or `Conteranto 2.png` in root
- [ ] No `assets/css/styles.css` (legacy)
- [ ] No `assets/js/script.js` (legacy)
- [ ] Website loads at https://conteranto.github.io/
- [ ] All sections display correctly
- [ ] Navigation works
- [ ] Research papers show without images
- [ ] Contact links are visible and work
- [ ] Mobile responsive design works

---

**Good luck! Your website is ready to go live! 🚀**

**Repository:** https://github.com/Conteranto/Conteranto.github.io
**Live Site:** https://conteranto.github.io/ (after Step 9)
