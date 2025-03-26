// Меню для телефона
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
});

// Срытие меню, при клике в любую другую точку экрана
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navigation') && !e.target.closest('.menu-toggle')) {
    document.querySelector('.navigation').classList.remove('active');
    }
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});