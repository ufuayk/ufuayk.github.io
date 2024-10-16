document.addEventListener('DOMContentLoaded', function() {
    const lightModeToggle = document.getElementById('lightModeToggle');
    const body = document.body;

    lightModeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
    });
});