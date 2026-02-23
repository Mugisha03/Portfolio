// ===========================
// 1. ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ===========================
// 2. SCROLL FADE-IN ANIMATIONS
// ===========================
const fadeElements = document.querySelectorAll(
    '.service-card, .project-card, .pricing-card, .benefit-item, .hero-container'
);

fadeElements.forEach(el => el.classList.add('fade-hidden'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));