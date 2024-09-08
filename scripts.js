// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// AOS (Animate On Scroll) Initialization
AOS.init();

// Scrollspy
$('body').scrollspy({ target: '#navbar', offset: 70 });

// Back to top button
var btn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.fadeIn();
    } else {
        btn.fadeOut();
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Mode Clair';
    } else {
        themeToggle.textContent = '🌙 Mode Sombre';
    }
});
