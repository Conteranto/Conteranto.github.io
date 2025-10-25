# Deployment Guide for Conteranto

This guide explains how to deploy the Conteranto website to various hosting platforms.

## Table of Contents

- [GitHub Pages (Recommended)](#github-pages-recommended)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Custom Server](#custom-server)

## GitHub Pages (Recommended)

GitHub Pages is the easiest and free way to host this static website.

### Prerequisites
- GitHub account
- Git installed locally

### Step-by-Step Instructions

#### 1. Create GitHub Repository

```bash
# Navigate to project directory
cd /Users/hadimohammadi/Documents/Conteranto

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Conteranto website"
```

#### 2. Create Remote Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `Conteranto` or `conteranto`
4. Description: "Context-Aware Cultural Translation - Official Website"
5. Choose Public or Private
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

#### 3. Push to GitHub

```bash
# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/Conteranto.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

#### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"
6. Wait a few minutes for deployment

#### 5. Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/Conteranto/
```

### Custom Domain (Optional)

To use a custom domain like `conteranto.org`:

1. In GitHub Pages settings, add your custom domain
2. Create a `CNAME` file in the root with your domain:
   ```
   conteranto.org
   ```
3. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io

   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```

## Netlify

Netlify offers automatic deployments and excellent performance.

### Method 1: Git Integration

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Click "New site from Git"
4. Connect to GitHub
5. Select your repository
6. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
7. Click "Deploy site"

### Method 2: Drag and Drop

1. Go to [Netlify](https://www.netlify.com/)
2. Log in
3. Drag the entire `Conteranto` folder onto the Netlify dashboard
4. Wait for deployment to complete

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Vercel

Vercel provides fast deployments with edge network.

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in
3. Click "New Project"
4. Import Git repository or drag folder
5. Framework: None
6. Root directory: `.` (root)
7. Click "Deploy"

### CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd /Users/hadimohammadi/Documents/Conteranto

# Deploy
vercel

# For production
vercel --prod
```

## Custom Server

If you're deploying to your own server:

### Apache

```apache
# .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Force HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Remove .html extension
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^([^\.]+)$ $1.html [NC,L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Nginx

```nginx
server {
    listen 80;
    server_name conteranto.org www.conteranto.org;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name conteranto.org www.conteranto.org;

    root /var/www/conteranto;
    index index.html;

    # SSL certificates
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Browser caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Main location
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## CI/CD Setup (Optional)

### GitHub Actions for Automated Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Install imagemin-cli
   npm install -g imagemin-cli

   # Optimize images
   imagemin assets/images/* --out-dir=assets/images
   ```

2. **Minify CSS** (Optional - already optimized)
   ```bash
   # Install cssnano
   npm install -g cssnano-cli

   # Minify CSS
   cssnano assets/css/styles.css assets/css/styles.min.css
   ```

3. **Minify JavaScript** (Optional - already optimized)
   ```bash
   # Install terser
   npm install -g terser

   # Minify JS
   terser assets/js/script.js -o assets/js/script.min.js
   ```

## Monitoring

### Analytics

Add Google Analytics or Plausible:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor with [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Check [GTmetrix](https://gtmetrix.com/)

## Troubleshooting

### Issue: Images Not Loading

- Check file paths are relative
- Verify images are in `assets/images/`
- Check file permissions on server

### Issue: Styles Not Applying

- Clear browser cache
- Check CSS file path in HTML
- Verify CSS file uploaded to server

### Issue: GitHub Pages Not Working

- Wait 5-10 minutes after enabling
- Check repository is public or has GitHub Pro
- Verify `index.html` is in root or docs folder

## Rollback

If you need to rollback to a previous version:

```bash
# Find commit hash
git log

# Rollback to specific commit
git reset --hard COMMIT_HASH

# Force push (use with caution)
git push -f origin main
```

## Support

For deployment issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Contact: contact@conteranto.org

---

**Ready to deploy!** 🚀

Choose your preferred platform and follow the instructions above.
