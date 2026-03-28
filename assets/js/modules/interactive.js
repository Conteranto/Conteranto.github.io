/**
 * Interactive Module
 * Handles translation demo sliders and other interactive elements
 */

/**
 * Initialize interactive translation demo
 */
export function initTranslationDemo() {
    const politenessSlider = document.getElementById('politenessSlider');
    const directnessSlider = document.getElementById('directnessSlider');
    const translationOutput = document.getElementById('translationOutput');

    if (!politenessSlider || !directnessSlider || !translationOutput) {
        console.warn('Translation demo elements not found');
        return;
    }

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
    politenessSlider.addEventListener('input', updateTranslation);
    directnessSlider.addEventListener('input', updateTranslation);

    // Set initial translation
    updateTranslation();

    console.log('✓ Translation demo initialized');
}

/**
 * Add copy to clipboard functionality for email
 */
export function initCopyToClipboard() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = link.textContent.trim();

            try {
                await navigator.clipboard.writeText(email);

                // Show feedback
                const originalText = link.textContent;
                const originalColor = link.style.color;

                link.textContent = '✓ Copied!';
                link.style.color = '#10b981';

                setTimeout(() => {
                    link.textContent = originalText;
                    link.style.color = originalColor;
                }, 2000);
            } catch (err) {
                // Fallback: open mailto link
                console.warn('Clipboard API not available, using mailto fallback');
                window.location.href = link.getAttribute('href');
            }
        });
    });

    console.log('✓ Copy to clipboard initialized');
}

/**
 * Add form validation if contact form exists
 */
export function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic form validation
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Example: send data to server
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    console.log('✓ Form validation initialized');
}
