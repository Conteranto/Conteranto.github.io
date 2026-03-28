// Conteranto Website JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    initNavigation();

    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Translation demo interactive sliders
    initTranslationDemo();

    // Scroll animations
    initScrollAnimations();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize interactive translation demo
 */
function initTranslationDemo() {
    const politenessSlider = document.getElementById('politenessSlider');
    const directnessSlider = document.getElementById('directnessSlider');
    const translationOutput = document.getElementById('translationOutput');

    // Translation variations based on slider values
    const translations = {
        lowPoliteness: {
            lowDirectness: "Maybe you could send the report sometime?",
            medDirectness: "Would you be able to send the report?",
            highDirectness: "Send the report."
        },
        medPoliteness: {
            lowDirectness: "I was wondering if you might send the report?",
            medDirectness: "Could you please send the report?",
            highDirectness: "Please send the report."
        },
        highPoliteness: {
            lowDirectness: "Would you possibly have time to send that report?",
            medDirectness: "Could you please send that report when you have a moment?",
            highDirectness: "I would appreciate it if you could send the report."
        }
    };

    function updateTranslation() {
        const politeness = parseInt(politenessSlider.value);
        const directness = parseInt(directnessSlider.value);

        let politenessLevel, directnessLevel;

        // Determine politeness level
        if (politeness < 35) politenessLevel = 'lowPoliteness';
        else if (politeness < 70) politenessLevel = 'medPoliteness';
        else politenessLevel = 'highPoliteness';

        // Determine directness level
        if (directness < 35) directnessLevel = 'lowDirectness';
        else if (directness < 70) directnessLevel = 'medDirectness';
        else directnessLevel = 'highDirectness';

        // Update translation output with animation
        translationOutput.style.opacity = '0.5';
        setTimeout(() => {
            translationOutput.textContent = translations[politenessLevel][directnessLevel];
            translationOutput.style.opacity = '1';
        }, 150);
    }

    // Add event listeners to sliders
    if (politenessSlider && directnessSlider && translationOutput) {
        politenessSlider.addEventListener('input', updateTranslation);
        directnessSlider.addEventListener('input', updateTranslation);

        // Set initial translation
        updateTranslation();
    }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .feature-card,
        .example-card,
        .outcome-card,
        .team-card,
        .contact-card,
        .feature-highlight
    `);

    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

/**
 * Utility function to debounce events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Add parallax effect to hero section (optional enhancement)
 */
function initParallaxEffect() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-background');

            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }, 10));
    }
}

// Initialize parallax effect if desired
// initParallaxEffect();

/**
 * Add typing animation to hero title (optional enhancement)
 */
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title .gradient-text');

    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }

        // Start typing animation after a short delay
        setTimeout(type, 500);
    }
}

// Optional: Enable typing animation
// initTypingAnimation();

/**
 * Add copy to clipboard functionality for email
 */
function initCopyToClipboard() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.textContent;

            navigator.clipboard.writeText(email).then(() => {
                // Show feedback
                const originalText = link.textContent;
                link.textContent = 'Copied!';
                link.style.color = '#10b981';

                setTimeout(() => {
                    link.textContent = originalText;
                    link.style.color = '';
                }, 2000);
            }).catch(err => {
                // Fallback: open mailto link
                window.location.href = link.getAttribute('href');
            });
        });
    });
}

// Initialize copy to clipboard
initCopyToClipboard();

/**
 * Add form validation if contact form exists
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Add your form validation and submission logic here
            const formData = new FormData(contactForm);

            // Example: send data to server
            console.log('Form submitted:', Object.fromEntries(formData));

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Initialize form validation
initFormValidation();

/**
 * Performance optimization: Lazy load images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

/**
 * Add keyboard navigation support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Initialize keyboard navigation
initKeyboardNavigation();

// Log welcome message
console.log('%cConteranto', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cContext-Aware Cultural Translation', 'font-size: 14px; color: #64748b;');
console.log('Translation that truly understands people, not just their words.');
