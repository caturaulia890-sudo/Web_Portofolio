document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile nav if it's open
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});