/**
 * Conteranto Website - Main JavaScript
 * Modular architecture with ES6 modules
 *
 * @version 2.0.0
 * @author Conteranto Team
 */

// Import modules
import { initNavigation, initSmoothScroll } from './modules/navigation.js';
import { initTranslationDemo, initCopyToClipboard, initFormValidation } from './modules/interactive.js';
import { initScrollAnimations, initLazyLoading } from './modules/animations.js';
import { logBranding } from './modules/utils.js';

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Conteranto Website...\n');

    // Log branding
    logBranding();

    // Initialize core functionality
    initNavigation();
    initSmoothScroll();

    // Initialize interactive features
    initTranslationDemo();
    initCopyToClipboard();
    initFormValidation();

    // Initialize animations
    initScrollAnimations();
    initLazyLoading();

    console.log('\n✅ All modules loaded successfully!');
});

/**
 * Optional: Initialize parallax and typing animations
 * Uncomment these lines to enable:
 *
 * import { initParallaxEffect, initTypingAnimation } from './modules/animations.js';
 *
 * Then in DOMContentLoaded:
 * initParallaxEffect();
 * initTypingAnimation();
 */
