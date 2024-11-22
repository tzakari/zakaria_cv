// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded successfully.');
}, function() {
    console.error('Error loading particles.json.');
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
    $('html, body').animate({scrollTop: 0}, '300');
});

// Theme Toggle with localStorage Persistence
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check and apply the saved theme
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Mode Clair';
}

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
