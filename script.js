// ================================
// NAVIGATION
// ================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect with smooth transition
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');

                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.classList.add('hidden');
                }, 5000);
            } else {
                alert('Oops! There was a problem submitting your form. Please try again or email directly at geokavin08@gmail.com');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Oops! There was a problem submitting your form. Please try again or email directly at geokavin08@gmail.com');
        }
    });
}

// ================================
// ANTHROPIC-STYLE SCROLL REVEAL
// Smooth, staggered reveal on scroll
// ================================

function initRevealAnimations() {
    // Elements that should animate on scroll
    const revealSelectors = [
        '.service-card',
        '.client-item',
        '.solution-card',
        '.philosophy-box',
        '.gallery-item',
        '.service-detail-content',
        '.service-detail-header',
        '.contact-detail',
        '.contact-form',
        '.section-title',
        '.section-header',
        '.page-title',
        '.page-description',
        '.about-text',
        '.about-visual',
        '.how-text',
        '.breadcrumb'
    ];

    const allRevealElements = document.querySelectorAll(revealSelectors.join(', '));

    allRevealElements.forEach(el => {
        if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-scale')) {
            el.classList.add('reveal');
        }
    });

    // Stagger cards within grids
    document.querySelectorAll('.services-grid, .clients-grid, .solutions-grid, .gallery-grid').forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            child.style.setProperty('--child-index', index);
            child.classList.add('reveal');
            grid.classList.add('stagger-children');
        });
    });

    // Intersection Observer for reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a slight delay based on the child index for stagger effect
                const delay = parseInt(entry.target.style.getPropertyValue('--child-index') || 0) * 100;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
        revealObserver.observe(el);
    });
}

// ================================
// SMOOTH PARALLAX EFFECT
// Subtle parallax on page headers
// ================================

function initParallax() {
    const pageHeader = document.querySelector('.page-header');
    const heroSection = document.querySelector('.hero-apple');

    if (pageHeader || heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            if (pageHeader) {
                const headerTitle = pageHeader.querySelector('.page-title');
                const headerDesc = pageHeader.querySelector('.page-description');
                if (headerTitle) {
                    headerTitle.style.transform = `translateY(${scrolled * 0.15}px)`;
                    headerTitle.style.opacity = Math.max(0, 1 - scrolled / 500);
                }
                if (headerDesc) {
                    headerDesc.style.transform = `translateY(${scrolled * 0.1}px)`;
                    headerDesc.style.opacity = Math.max(0, 1 - scrolled / 600);
                }
            }

            if (heroSection) {
                const heroName = heroSection.querySelector('.hero-name-apple');
                const heroSubtitle = heroSection.querySelector('.hero-subtitle-apple');
                if (heroName) {
                    heroName.style.transform = `translateY(${scrolled * 0.2}px)`;
                    heroName.style.opacity = Math.max(0, 1 - scrolled / 400);
                }
                if (heroSubtitle) {
                    heroSubtitle.style.transform = `translateY(${scrolled * 0.12}px)`;
                    heroSubtitle.style.opacity = Math.max(0, 1 - scrolled / 500);
                }
            }
        }, { passive: true });
    }
}

// ================================
// MAGNETIC HOVER EFFECT
// Cards subtly follow cursor
// ================================

function initMagneticCards() {
    const cards = document.querySelectorAll('.service-card, .client-item, .solution-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${-y * 0.02}deg) rotateY(${x * 0.02}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// ================================
// SMOOTH COUNTER ANIMATION
// For any number elements
// ================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 60;
        const duration = 2000;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, stepTime);
    });
}

// ================================
// SCROLL INDICATOR
// ================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    });
}

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

function debounce(func, wait = 10) {
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

window.addEventListener('scroll', debounce(highlightNavLink, 10));

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================

navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navToggle.click();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ================================
// SMOOTH PAGE LOAD ANIMATION
// ================================

function initPageLoadAnimation() {
    // Fade in the page content smoothly
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });

    // Animate the page header elements with stagger
    const pageTitle = document.querySelector('.page-title, .hero-name-apple');
    const pageDesc = document.querySelector('.page-description, .hero-subtitle-apple');
    const heroButtons = document.querySelector('.hero-buttons-apple');

    if (pageTitle) {
        pageTitle.style.opacity = '0';
        pageTitle.style.transform = 'translateY(30px)';
        pageTitle.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            pageTitle.style.opacity = '1';
            pageTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    if (pageDesc) {
        pageDesc.style.opacity = '0';
        pageDesc.style.transform = 'translateY(20px)';
        pageDesc.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            pageDesc.style.opacity = '1';
            pageDesc.style.transform = 'translateY(0)';
        }, 400);
    }

    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(20px)';
        heroButtons.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 600);
    }
}

// ================================
// INITIALIZE
// ================================

document.addEventListener('DOMContentLoaded', () => {
    highlightNavLink();
    initPageLoadAnimation();
    initRevealAnimations();
    initParallax();
    initMagneticCards();
    
    document.body.classList.add('loaded');
    console.log('K-GeoScience Consultancy website loaded successfully');
});
