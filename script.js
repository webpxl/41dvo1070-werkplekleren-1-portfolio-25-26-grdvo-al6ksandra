document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
});


const hiddenElements = document.querySelectorAll('.project-card, .text-content, .dvo-card, .experience-card, .section-title');
hiddenElements.forEach((el) => el.classList.add('hidden-element'));
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;


    const stars = document.querySelectorAll('.star-icon, .left, .star-right, .bullet-icon, .dvo-header .logo img');

    stars.forEach((star) => {

        star.style.transform = `rotate(${scrollPosition / 2}deg)`;
    });
});



const cursor = document.getElementById('custom-cursor');
let isDarkMode = false;

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';


    const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);


    if (elementUnderMouse && elementUnderMouse.closest('.brown-bar, .header, .footer, .download-bar, .project-card, .resume-section')) {
        cursor.classList.add('light-mode');
        isDarkMode = true;
    } else {
        cursor.classList.remove('light-mode');
        isDarkMode = false;
    }


    if (Math.random() < 0.3) {
        createDust(e.clientX, e.clientY);
    }
});

function createDust(x, y) {
    const dust = document.createElement('div');
    dust.classList.add('star-dust');


    if (isDarkMode) {
        dust.classList.add('light-dust');
    }


    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    dust.style.left = (x + offsetX) + 'px';
    dust.style.top = (y + offsetY) + 'px';

    document.body.appendChild(dust);


    setTimeout(() => {
        dust.remove();
    }, 1000);
}
