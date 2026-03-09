// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Configure particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1000
            },
            limit: 120
        },
        color: {
            value: '#ff7b00'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff7b00',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push',
                particles_nb: 4
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4,
                particles_limit: 120
            }
        }
    },
    retina_detect: true
});

const initTextAnimation = () => {
    const phrases = [
        'Data Scientist',
        'ML Engineer',
        'Computer Vision'
    ];

    const textElement = document.querySelector('.typing-text');
    let currentPhraseIndex = 0;

    const updateText = () => {
        textElement.style.opacity = '0';
        setTimeout(() => {
            textElement.textContent = phrases[currentPhraseIndex];
            textElement.style.opacity = '1';
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }, 500);
    };

    updateText();
    setInterval(updateText, 3000);
};

const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const target = skill.getAttribute('data-progress');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= target) {
                clearInterval(interval);
            } else {
                width++;
                skill.style.width = width + '%';
            }
        }, 10);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.querySelector('.eclipse-loader');
        const content = document.querySelector('.content-wrapper');

        loader.style.transition = 'all 1s ease';
        loader.style.filter = 'blur(50px)';
        loader.style.opacity = '0';

        content.style.opacity = '0';
        content.style.display = 'block';

        setTimeout(() => {
            content.style.transition = 'opacity 1.5s ease';
            content.style.opacity = '1';
            loader.style.display = 'none';
        }, 1000);
    }, 4000);

    initTextAnimation();
    animateSkills();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('animate');

            if (scrollDirection === 'up') {
                element.classList.add('scroll-up');
            } else {
                element.classList.add('scroll-down');
            }
        } else {
            element.classList.remove('animate', 'scroll-up', 'scroll-down');
        }
    });

    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', function() {
    const detailsBtns = document.querySelectorAll('.project-details-btn');

    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const description = this.nextElementSibling;
            const isActive = description.classList.contains('active');

            description.classList.toggle('active');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', String(!isActive));

            if (isActive) {
                description.style.height = '0';
            } else {
                description.style.height = description.scrollHeight + 'px';
            }
        });
    });
});

let currentLang = 'ru';

function updateLanguage() {
    const langText = document.querySelector('.lang-text');
    langText.textContent = currentLang.toUpperCase();

    const skillsTitle = document.querySelector('.skills-section .section-title');
    const aboutTitle = document.querySelector('.about-section .section-title');
    const projectsTitle = document.querySelector('.projects-section .section-title');

    if (skillsTitle) skillsTitle.textContent = translations[currentLang].skills;
    if (aboutTitle) aboutTitle.textContent = translations[currentLang].about;
    if (projectsTitle) projectsTitle.textContent = translations[currentLang].projects;

    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards[0]) {
        skillCards[0].querySelector('.skill-title').textContent = translations[currentLang].python;
        skillCards[0].querySelector('.skill-description').textContent = translations[currentLang].pythonDesc;
    }
    if (skillCards[1]) {
        skillCards[1].querySelector('.skill-title').textContent = translations[currentLang].ml;
        skillCards[1].querySelector('.skill-description').textContent = translations[currentLang].mlDesc;
    }
    if (skillCards[2]) {
        skillCards[2].querySelector('.skill-title').textContent = translations[currentLang].cv;
        skillCards[2].querySelector('.skill-description').textContent = translations[currentLang].cvDesc;
    }
    if (skillCards[3]) {
        skillCards[3].querySelector('.skill-title').textContent = translations[currentLang].dataAnalysis;
        skillCards[3].querySelector('.skill-description').textContent = translations[currentLang].dataAnalysisDesc;
    }

    const glowText = document.querySelector('.glow-text');
    const aboutDesc = document.querySelector('.about-description p');
    if (glowText) glowText.textContent = translations[currentLang].aboutTitle;
    if (aboutDesc) aboutDesc.textContent = translations[currentLang].aboutDesc;

    const experienceCards = document.querySelectorAll('.experience-card');
    if (experienceCards[0]) {
        const title = experienceCards[0].querySelector('h3');
        const company = experienceCards[0].querySelector('.experience-company');
        const desc = experienceCards[0].querySelector('.experience-description');

        if (title) title.textContent = translations[currentLang].freelanceRole;
        if (company) company.textContent = translations[currentLang].freelanceCompany;
        if (desc) desc.textContent = translations[currentLang].freelanceDesc;
    }

    if (experienceCards[1]) {
        const title = experienceCards[1].querySelector('h3');
        const company = experienceCards[1].querySelector('.experience-company');
        const desc = experienceCards[1].querySelector('.experience-description');

        if (title) title.textContent = translations[currentLang].monitoringRole;
        if (company) company.textContent = translations[currentLang].monitoringCompany;
        if (desc) desc.textContent = translations[currentLang].monitoringRoleDesc;
    }

    const projectTitles = document.querySelectorAll('.projects-section .timeline-content h3');
    const projectDescs = document.querySelectorAll('.projects-section .project-description p');
    const moreDetailsBtns = document.querySelectorAll('.projects-section .project-details-btn');

    if (projectTitles[0]) projectTitles[0].textContent = translations[currentLang].parkingSystem;
    if (projectTitles[1]) projectTitles[1].textContent = translations[currentLang].faceSystem;
    if (projectTitles[2]) projectTitles[2].textContent = translations[currentLang].monitoringSystem;
    if (projectTitles[3]) projectTitles[3].textContent = translations[currentLang].myMptSystem;
    if (projectTitles[4]) projectTitles[4].textContent = translations[currentLang].gadukaGangSystem;
    if (projectTitles[5]) projectTitles[5].textContent = translations[currentLang].autoCollectBotSystem;
    if (projectTitles[6]) projectTitles[6].textContent = translations[currentLang].tooLearnSystem;

    if (projectDescs[0]) projectDescs[0].textContent = translations[currentLang].parkingDesc;
    if (projectDescs[1]) projectDescs[1].textContent = translations[currentLang].faceDesc;
    if (projectDescs[2]) projectDescs[2].textContent = translations[currentLang].monitoringDesc;
    if (projectDescs[3]) projectDescs[3].textContent = translations[currentLang].myMptDesc;
    if (projectDescs[4]) projectDescs[4].textContent = translations[currentLang].gadukaGangDesc;
    if (projectDescs[5]) projectDescs[5].textContent = translations[currentLang].autoCollectBotDesc;
    if (projectDescs[6]) projectDescs[6].textContent = translations[currentLang].tooLearnDesc;

    moreDetailsBtns.forEach(btn => {
        btn.innerHTML = translations[currentLang].moreDetails + ' <span class="arrow">&#9660;</span>';
    });

    document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const langText = document.querySelector('.lang-text');

    currentLang = 'ru';
    document.documentElement.lang = 'ru';
    langText.textContent = 'RU';

    languageToggle.addEventListener('change', function() {
        currentLang = this.checked ? 'en' : 'ru';
        document.documentElement.lang = currentLang;
        langText.textContent = currentLang.toUpperCase();
        updateLanguage();
    });
});
