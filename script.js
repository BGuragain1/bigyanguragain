// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Update active heading
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7').forEach(heading => {
            heading.classList.remove('active');
        });

        // Add active class to heading in the target section
        const targetHeading = document.querySelector(`#${targetId} h1, #${targetId} h2, #${targetId} h3, #${targetId} h4, #${targetId} h5, #${targetId} h6`);
        if (targetHeading) {
            targetHeading.classList.add('active');
        }
    });
});

// Sticky Navbar: Add background color when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }

    // Highlight the section heading based on scroll position
    const sections = document.querySelectorAll('section');
    let currentId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            currentId = section.getAttribute('id');
        }
    });

    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        heading.classList.remove('active');
    });

    if (currentId) {
        const currentHeading = document.querySelector(`#${currentId} h1, #${currentId} h2, #${currentId} h3, #${currentId} h4, #${currentId} h5, #${currentId} h6`);
        if (currentHeading) {
            currentHeading.classList.add('active');
        }
    }
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = "&#8679;";
backToTopButton.id = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover animations for project and certification cards
const cards = document.querySelectorAll('.project-item, .certificate-item');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover-effect');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('hover-effect');
    });
});
