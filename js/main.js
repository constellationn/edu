// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    import { MobileMenu } from './components/mobileMenu.js';
    import { CourseCard } from './components/courseCard.js';
    import { setupSmoothScroll } from './utils/navigation.js';
    import { handleFormSubmission } from './utils/form.js';
    import { createScrollObserver, setupElementAnimation } from './utils/animation.js';

    // Initialize mobile menu
    const mobileMenu = new MobileMenu('.mobile-menu-btn', '.nav-links');

    // Setup smooth scrolling
    setupSmoothScroll('a[href^="#"]');

    // Setup form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmission(contactForm);
        });
    }

    // Setup course card animations
    const observer = createScrollObserver({ threshold: 0.1 });
    document.querySelectorAll('.course-card').forEach(card => {
        setupElementAnimation(card);
        observer.observe(card);
    });
});