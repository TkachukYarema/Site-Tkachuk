// index.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.querySelector('.header_container');
    if (!headerContainer) return;

    // Initial state
    headerContainer.style.position = 'fixed';
    headerContainer.style.top = '0';
    headerContainer.style.left = '0';
    headerContainer.style.width = '100%';
    headerContainer.style.transition = 'transform 0.3s, opacity 0.3s';

    // Listen for scroll events
    window.addEventListener('scroll', () => {
        // Move the header_container up as you scroll down, max 100px
        const offset = Math.min(window.scrollY, 100);
        headerContainer.style.transform = `translateY(-${offset}px)`;
        if (window.scrollY <= 100) {
            headerContainer.style.opacity = '1';
            headerContainer.style.pointerEvents = 'auto';
        } else {
            headerContainer.style.opacity = '0';
            headerContainer.style.pointerEvents = 'none';
        }
    });
});