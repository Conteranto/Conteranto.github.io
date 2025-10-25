# Conteranto - Context-Aware Cultural Translation

![Conteranto Logo](./assets/images/conteranto-logo.png)

> Translation that truly understands people, not just their words.

## Overview

Conteranto is a translation system that introduces a **cultural-context layer** powered by large language models and explainable pragmatics. Unlike traditional machine translation that focuses solely on linguistic accuracy, Conteranto respects cultural communication norms and adjusts tone, politeness, directness, and formality based on the target language and communication context.

## The Problem

Current machine translation has made enormous progress in accuracy, yet it still struggles with **how things are said**. Politeness, directness, or indirect phrasing are not mere stylistic choices: they carry cultural meaning.

- A phrase that sounds neutral in English may be offensive in Persian if translated too bluntly
- A polite Dutch request can become unnecessarily formal in Japanese if tone is not adapted
- Today's tools deliver one-size-fits-all output, ignoring these cultural dimensions

## Our Solution

Conteranto generates translations that respect cultural communication norms through four key parameters:

### Core Features

1. **Politeness** - Adjust formality levels from casual to highly respectful
2. **Directness** - Control whether communication is explicit or uses subtle, indirect phrasing
3. **Formality** - Adapt language register for business, academic, or casual contexts
4. **Attribution** - Handle credit and responsibility according to cultural communication norms

### Key Capabilities

- **Automatic Initialization**: Smart defaults based on target language and context
- **User Control**: Fine-tune parameters with instant feedback
- **Explainability**: Live explanations of why adjustments matter
- **Cultural Intelligence**: Translations that "sound right" to native speakers

## Project Team

### Academic & Industry Expertise

- **Hadi Mohammadi** - PhD Candidate, Utrecht University
  _Expertise in explainable NLP, large language models, and moral reasoning in AI_

- **Jeroen Sparla** - CEO, AcademicTransfer
  _Strategic experience in international communication platforms and cross-cultural design_

- **Dr. Ayoub Bagheri** - Associate Professor, Utrecht University
  _Leads the Natural Language and Text Processing lab, specializes in explainable and human-centered NLP_

## Concrete Outcomes

### Deliverables

1. **Demo Environment** - Working prototype built on existing LLM APIs with intuitive UI
2. **Unique Dataset** - User tone adjustment data providing insights into cross-cultural communication preferences
3. **Research Article** - Academic analysis of cultural variance in translation styles

### Research Impact

Conteranto will generate a unique dataset on user preferences: how speakers of different languages actually want to communicate. These insights will advance the next generation of culturally adaptive translation algorithms.

## Technology Stack

### Frontend
- **HTML5** - Semantic markup with modern structure
- **CSS3** - Modular architecture with CSS @import, Grid, Flexbox, Custom Properties
- **ES6 JavaScript** - Modern modules system, no build tools required

### Architecture
- **Modular CSS** - Separated concerns (base, layout, components, sections)
- **ES6 Modules** - Native JavaScript modules for code organization
- **No Dependencies** - Pure vanilla JavaScript, no frameworks or libraries
- **Static Site** - No build process, works directly in browsers

### Design
- **Responsive Design** - Mobile-first approach with fluid layouts
- **Accessibility** - WCAG 2.1 Level AA compliant
- **Performance** - Optimized for fast loading (<2s on 3G)
- **Design System** - Consistent variables, spacing scale, color palette

### Deployment
- **GitHub Pages** - Static site hosting
- **CDN** - Google Fonts for typography (Inter & Space Grotesk)

## Website Structure

### Modular Architecture (v2.0)

The codebase has been completely restructured with a modular architecture for better maintainability, scalability, and performance:

```
Conteranto/
├── index.html                          # Main website entry point
├── assets/
│   ├── css/
│   │   ├── main.css                    # Main CSS entry point (imports all modules)
│   │   ├── modules/                    # Core CSS modules
│   │   │   ├── base.css                # Variables, reset, typography
│   │   │   ├── layout.css              # Container, sections, grids
│   │   │   ├── components.css          # Reusable components (buttons, cards, badges)
│   │   │   └── navigation.css          # Navbar, mobile menu, links
│   │   ├── sections/                   # Section-specific styles
│   │   │   ├── hero.css                # Hero section with translation demo
│   │   │   ├── research.css            # Research publications (enhanced typography)
│   │   │   └── other-sections.css      # Problem, Solution, Features, Team, etc.
│   │   └── styles.css                  # Legacy file (deprecated)
│   ├── js/
│   │   ├── main.js                     # Main JS entry point (ES6 modules)
│   │   ├── modules/                    # Core JS modules
│   │   │   ├── navigation.js           # Navigation & scroll behavior
│   │   │   ├── interactive.js          # Translation demo, clipboard
│   │   │   ├── animations.js           # Scroll animations, lazy loading
│   │   │   └── utils.js                # Utility functions
│   │   └── script.js                   # Legacy file (deprecated)
│   └── images/
│       ├── conteranto-logo.png         # Main logo
│       ├── conteranto-logo-alt.png     # Alternative logo
│       ├── favicon.png                 # Browser favicon
│       ├── essay1.jpg                  # Philosophy essay 1
│       ├── essay2.jpg                  # Philosophy essay 2
│       └── essay3.jpg                  # Philosophy essay 3
├── .gitignore                          # Git ignore rules
├── README.md                           # This file
├── LICENSE                             # License information
├── CONTRIBUTING.md                     # Contribution guidelines
└── DEPLOYMENT.md                       # Deployment instructions
```

### Architecture Highlights

#### CSS Modular System
- **Base Module**: Design system variables, CSS reset, global typography
- **Layout Module**: Responsive containers, section layouts, grid systems
- **Components Module**: Reusable UI components (cards, buttons, badges)
- **Navigation Module**: Fixed navbar, mobile menu, smooth scroll
- **Section Modules**: Isolated styles for each major section

#### JavaScript ES6 Modules
- **Navigation Module**: Navbar scroll effects, mobile menu, active link highlighting
- **Interactive Module**: Translation demo sliders, copy to clipboard, form validation
- **Animations Module**: Scroll animations with IntersectionObserver, lazy loading
- **Utils Module**: Debounce, throttle, viewport detection, date formatting

#### Enhanced Research Section
- **No Images**: Pure typography-focused design with enhanced visual hierarchy
- **ArXiv Badges**: Prominent paper IDs with custom styling
- **Status Indicators**: Visual badges for "Published" vs "Under Review"
- **Year Badges**: Highlight publication years
- **Gradient Effects**: Animated gradient borders on hover
- **Responsive Cards**: Adaptive layout for all screen sizes

## Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Running Locally

#### Option 1: Using Python
```bash
# Navigate to project directory
cd Conteranto

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000
```

#### Option 2: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd Conteranto

# Start server
http-server -p 8000

# Open browser to http://localhost:8000
```

#### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 4: Direct File Access
Simply open `index.html` directly in your browser (some features may not work without a server)

## Deployment to GitHub Pages

### Step 1: Initialize Git Repository (if not already done)
```bash
cd Conteranto
git init
git add .
git commit -m "Initial commit: Conteranto website"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `Conteranto`
2. Don't initialize with README (we already have one)

### Step 3: Push to GitHub
```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/Conteranto.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select Source: `main` branch, `/ (root)` folder
4. Click Save
5. Your site will be published at: `https://YOUR-USERNAME.github.io/Conteranto/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer (not supported)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 100KB (excluding images)

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML5
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios meet guidelines

## Features

### Interactive Elements
- Responsive navigation with mobile menu
- Smooth scroll animations
- Interactive translation demo with live parameter adjustment
- Scroll-to-top functionality
- Keyboard navigation support

### Visual Design
- Modern gradient color scheme
- Professional typography (Inter & Space Grotesk fonts)
- Smooth animations and transitions
- Clean grid layouts
- High contrast for readability

## Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of academic research at Utrecht University. For collaboration or licensing inquiries, please contact the team.

## Contact

- **Email**: conteranto@academictransfer.nl
- **GitHub**: [github.com/conteranto](https://github.com/conteranto)
- **Research Lab**: Utrecht University NLP Lab

## Acknowledgments

This project is supported by:
- Utrecht University
- AcademicTransfer
- Natural Language and Text Processing Lab
- Imminent Grant Program

## Mission

Where machine translation once aimed for efficiency, Conteranto aims for **empathy and resonance**, ensuring people worldwide can communicate with the respect, warmth, and nuance they intend, regardless of language barriers.

---

Mohammadi, H., Sparla, J., & Bagheri, A. (2025). Conteranto: Context-Aware Cultural Translation. Utrecht University & AcademicTransfer.

For commercial use or collaboration inquiries, please contact: conteranto@academictransfer.nl
