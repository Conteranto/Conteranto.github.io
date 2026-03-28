/**
 * Utilities Module
 * Utility functions and helpers
 */

/**
 * Debounce function to limit rate of function execution
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 250) {
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
 * Throttle function to limit execution to once per time period
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 250) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is in viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get scroll percentage of page
 * @returns {number} Scroll percentage (0-100)
 */
export function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

/**
 * Smooth scroll to element
 * @param {HTMLElement|string} target - Element or selector to scroll to
 * @param {number} offset - Offset in pixels (default: 0)
 */
export function smoothScrollTo(target, offset = 0) {
    const element = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!element) {
        console.warn(`Element not found: ${target}`);
        return;
    }

    const targetPosition = element.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Generate unique ID
 * @param {string} prefix - Optional prefix for ID
 * @returns {string} Unique ID
 */
export function generateId(prefix = 'id') {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format date
 * @param {Date|string} date - Date to format
 * @param {string} format - Format string (default: 'YYYY-MM-DD')
 * @returns {string} Formatted date
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Check if browser supports feature
 * @param {string} feature - Feature to check
 * @returns {boolean} True if supported
 */
export function supportsFeature(feature) {
    switch (feature) {
        case 'webp':
            const canvas = document.createElement('canvas');
            return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        case 'clipboard':
            return navigator.clipboard !== undefined;
        case 'intersection-observer':
            return 'IntersectionObserver' in window;
        default:
            return false;
    }
}

/**
 * Log branding message to console
 */
export function logBranding() {
    console.log(
        '%cConteranto',
        'font-size: 24px; font-weight: bold; color: #2563eb; font-family: Space Grotesk, sans-serif;'
    );
    console.log(
        '%cContext-Aware Cultural Translation',
        'font-size: 14px; color: #64748b; font-family: Inter, sans-serif;'
    );
    console.log(
        '%cTranslation that truly understands people, not just their words.',
        'font-size: 12px; color: #94a3b8; font-style: italic;'
    );
    console.log('');
}
