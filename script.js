// Menu burger pour la responsivité
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Animation au scroll (effet d'apparition)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
// Défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Gestion du changement de thème
document.addEventListener('DOMContentLoaded',()=> {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
// Vérifie si un thème est déjà sauvegardé dans le stockage local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleButton.textContent = savedTheme === 'light-mode' ? 'Passer au thème sombre' : 'Passer au thème clair';
    } else {
        toggleButton.textContent = 'Passer au thème clair';
    }

    // Ajoute un écouteur d'événement pour le bouton de thème
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        toggleButton.textContent = isLightMode ? 'Passer au thème sombre' : 'Passer au thème clair';
        // Sauvegarde le thème dans le stockage local
        localStorage.setItem('theme', isLightMode ? 'light-mode' : '');
    });
});
