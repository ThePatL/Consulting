// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // This would be used for any shared JavaScript functionality
    // Currently the contact form is handled in the contact.html file
    
    // Initialize feather icons
    if (feather) {
        feather.replace();
    }
    
    // Accessibility - add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add aria-current to current page link in nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('custom-navbar a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === '/')) {
            link.setAttribute('aria-current', 'page');
        }
    });
});