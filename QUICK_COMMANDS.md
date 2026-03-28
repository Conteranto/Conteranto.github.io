# Quick Commands Reference

Copy and paste these commands in order:

```bash
# 1. Remove old git repository
cd /Users/hadimohammadi/Documents/Conteranto
rm -rf .git

# 2. Initialize new repository
git init

# 3. Add all files
git add .

# 4. Check what will be committed (optional)
git status

# 5. Create first commit
git commit -m "Initial commit: Conteranto website v2.0

- Modular CSS and JS architecture
- Enhanced Research section with typography-focused design
- WCAG 2.1 AA compliant color contrast
- Responsive design for all devices
- Complete documentation and guides"

# 6. Rename branch to main
git branch -M main

# 7. Connect to GitHub
git remote add origin https://github.com/Conteranto/Conteranto.github.io.git

# 8. Push to GitHub
git push -u origin main
```

**Then:**
1. Go to https://github.com/Conteranto/Conteranto.github.io/settings/pages
2. Set Source to: Branch `main`, Folder `/ (root)`
3. Click Save
4. Wait 1-2 minutes
5. Visit https://conteranto.github.io/

**Done!** ✓
