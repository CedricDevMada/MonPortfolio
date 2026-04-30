const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease',
    reset: true
});

/* PROFIL */
sr.reveal('.photo', { origin: 'top', delay: 200 });
sr.reveal('.profil h2', { origin: 'left', delay: 300 });
sr.reveal('.profil p', { origin: 'right', delay: 400 });

/* COMPETENCES */
sr.reveal('.skills span', { interval: 100, origin: 'bottom' });

/* PROJETS */
sr.reveal('.projets h2', { origin: 'top' });
//sr.reveal('.card', { origin: 'bottom', interval: 150 });

/* CONTACT */
sr.reveal('.contact', { origin: 'bottom', delay: 200 });

const carousel = document.querySelector(".carousel");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

function getScrollAmount() {
    return carousel.clientWidth * 0.9; // 🔥 dynamique (responsive)
}

right.addEventListener("click", () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

left.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});