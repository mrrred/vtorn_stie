document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.navigation').classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navigation') && !e.target.closest('.menu-toggle')) {
        document.querySelector('.navigation').classList.remove('active');
    }
});