/**
 * Interactive Module
 * Handles translation demo sliders and other interactive elements
 */

/**
 * Initialize interactive translation demo
 */
export function initTranslationDemo() {
    const politenessSlider = document.getElementById('politenessSlider');
    const formalitySlider = document.getElementById('formalitySlider');
    const translationOutput = document.getElementById('translationOutput');

    if (!politenessSlider || !formalitySlider || !translationOutput) {
        console.warn('Translation demo elements not found');
        return;
    }

    // Translation variations based on slider values
    // Politeness = respect level (casual → respectful)
    // Formality = language register (informal → formal)
    const translations = {
        lowPoliteness: {
            lowFormality: "Hey, can you send that report?",
            medFormality: "Can you send the report?",
            highFormality: "Could you please forward the report at your earliest convenience?"
        },
        medPoliteness: {
            lowFormality: "Hey, would you mind sending the report when you get a chance?",
            medFormality: "Could you please send the report?",
            highFormality: "We would kindly ask you to submit the report."
        },
        highPoliteness: {
            lowFormality: "I'd really appreciate it if you could send the report!",
            medFormality: "I would be grateful if you could send the report.",
            highFormality: "I would be most grateful if you could kindly submit the report at your convenience."
        }
    };

    function updateTranslation() {
        const politeness = parseInt(politenessSlider.value);
        const formality = parseInt(formalitySlider.value);

        let politenessLevel, formalityLevel;

        // Determine politeness level
        if (politeness < 35) politenessLevel = 'lowPoliteness';
        else if (politeness < 70) politenessLevel = 'medPoliteness';
        else politenessLevel = 'highPoliteness';

        // Determine formality level
        if (formality < 35) formalityLevel = 'lowFormality';
        else if (formality < 70) formalityLevel = 'medFormality';
        else formalityLevel = 'highFormality';

        // Update translation output with animation
        translationOutput.style.opacity = '0.5';
        setTimeout(() => {
            translationOutput.textContent = translations[politenessLevel][formalityLevel];
            translationOutput.style.opacity = '1';
        }, 150);
    }

    // Add event listeners to sliders
    politenessSlider.addEventListener('input', updateTranslation);
    formalitySlider.addEventListener('input', updateTranslation);

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
