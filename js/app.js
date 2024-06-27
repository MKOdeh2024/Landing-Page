// Build navigation menu

function buildNav() {
    const navList = document.getElementById('nav-list');
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = section.getAttribute('data-nav');
        link.setAttribute('data-section', section.id);
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
}

// Smooth scroll to section
// Smooth scroll to section
function smoothScroll(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const targetId = event.target.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Set active section
function setActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-list a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isActive = rect.top <= 150 && rect.bottom >= 150;

        section.classList.toggle('active', isActive);
        navLinks[index].classList.toggle('active', isActive);
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
document.addEventListener('DOMContentLoaded', buildNav);
document.querySelector('#nav-list').addEventListener('click', smoothScroll);
window.addEventListener('scroll', setActiveSection);


/** 
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
}); **/