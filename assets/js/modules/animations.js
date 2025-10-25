/**
 * Animations Module
 * Handles scroll animations and intersection observers
 */

/**
 * Initialize scroll animations
 */
export function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('✓ Animations disabled (user prefers reduced motion)');
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optionally unobserve after animating once
                // observer.unobserve(entry.target);
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
        .feature-highlight,
        .philosophy-link
    `);

    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    console.log(`✓ Scroll animations initialized (${animateElements.length} elements)`);
}

/**
 * Add parallax effect to hero section (optional enhancement)
 */
export function initParallaxEffect() {
    const hero = document.querySelector('.hero');

    if (!hero) {
        return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return;
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = hero.querySelector('.hero-background');

        if (parallax && scrolled < window.innerHeight) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    console.log('✓ Parallax effect initialized');
}

/**
 * Add typing animation to hero title (optional enhancement)
 */
export function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title .gradient-text');

    if (!heroTitle) {
        return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return;
    }

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

    console.log('✓ Typing animation initialized');
}

/**
 * Performance optimization: Lazy load images
 */
export function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if (images.length === 0) {
        return;
    }

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

    console.log(`✓ Lazy loading initialized (${images.length} images)`);
}
