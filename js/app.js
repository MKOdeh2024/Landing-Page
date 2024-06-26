// Build the navigation menu
function buildNav() {
    const navList = document.getElementById('nav-list');
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = section.getAttribute('data-nav');
        link.href = `#${section.id}`;
        link.classList.add('menu__link');
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
}

// Smooth scroll to section
function smoothScroll(event) {
    event.preventDefault();
    if (event.target.classList.contains('menu__link')) {
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Set active section
function setActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-list a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            section.classList.add('active-section');
            navLinks[index].classList.add('active');
        } else {
            section.classList.remove('active-section');
            navLinks[index].classList.remove('active');
        }
    });
}

// Toggle scroll-to-top button visibility
function toggleScrollTopButton() {
    const scrollTopButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hide navbar while not scrolling
let scrollTimeout;

function hideNavbarWhileNotScrolling() {
    const navbar = document.getElementById('navbar');
    navbar.style.opacity = '1';
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        navbar.style.opacity = '0';
    }, 2000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    document.getElementById('nav-list').addEventListener('click', smoothScroll);
    document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);
});

window.addEventListener('scroll', () => {
    setActiveSection();
    toggleScrollTopButton();
    hideNavbarWhileNotScrolling();
});