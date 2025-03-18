// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true
});

// Настройка particles.js
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

// Заменяем старую функцию typeText на более плавную анимацию
const initTextAnimation = () => {
    const phrases = [
        "Data Scientist",
        "ML Engineer",
        "Computer Vision"
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

// Анимация прогресс-баров навыков
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

// Обновляем инициализацию
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.querySelector('.eclipse-loader');
        const content = document.querySelector('.content-wrapper');
        
        // Добавляем эффект размытия при исчезновении
        loader.style.transition = 'all 1s ease';
        loader.style.filter = 'blur(50px)';
        loader.style.opacity = '0';
        
        // Показываем контент с эффектом появления
        content.style.opacity = '0';
        content.style.display = 'block';
        
        setTimeout(() => {
            content.style.transition = 'opacity 1.5s ease';
            content.style.opacity = '1';
            loader.style.display = 'none';
        }, 1000);
    }, 4000); // Увеличиваем время показа анимации
    initTextAnimation();
    animateSkills();
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Добавляем новую функцию для отслеживания направления прокрутки
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    
    // Находим все элементы, которые нужно анимировать
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Элемент входит в область видимости
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('animate');
            
            // Добавляем специальные классы в зависимости от направления прокрутки
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

// Добавляем обработчик для кнопок "Подробнее"
document.addEventListener('DOMContentLoaded', function() {
    const detailsBtns = document.querySelectorAll('.project-details-btn');
    
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const description = this.nextElementSibling;
            const isActive = description.classList.contains('active');
            
            // Переключаем активное состояние
            description.classList.toggle('active');
            this.classList.toggle('active');
            
            // Плавная анимация
            if (isActive) {
                description.style.height = '0';
            } else {
                description.style.height = description.scrollHeight + 'px';
            }
        });
    });
}); 
