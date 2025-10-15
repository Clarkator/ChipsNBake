document.addEventListener('DOMContentLoaded', () => {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mobileNav = document.getElementById('mobile-nav-links');
                    if (mobileNav.classList.contains('open')) {
                        mobileNav.classList.remove('open');
                        document.getElementById('hamburger-menu').classList.remove('open');
                    }
                });
            });

            // Mobile Navigation Toggle
            const hamburger = document.getElementById('hamburger-menu');
            const mobileNavLinks = document.getElementById('mobile-nav-links');

            if (hamburger && mobileNavLinks) {
                hamburger.addEventListener('click', () => {
                    mobileNavLinks.classList.toggle('open');
                    hamburger.classList.toggle('open');
                });
            }

            // Intersection Observer for scroll animations (modern & smooth)
            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the item is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            }, observerOptions);

            // Apply observer to elements that need animation
            document.querySelectorAll('.fade-in, .slide-up, .fade-in-up').forEach(el => {
                observer.observe(el);
            });

            // Optional: Add a class to header on scroll for subtle effect
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });
