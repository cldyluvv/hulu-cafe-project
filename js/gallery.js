let currentSlide = 0;

const cards = document.querySelectorAll(".slide-card");

function updateSlider() {
    cards.forEach(card => {
        card.className = "slide-card";
    });

    const total = cards.length;

    cards[currentSlide].classList.add("active");
    cards[(currentSlide - 1 + total) % total].classList.add("left1");
    cards[(currentSlide - 2 + total) % total].classList.add("left2");
    cards[(currentSlide + 1) % total].classList.add("right1");
    cards[(currentSlide + 2) % total].classList.add("right2");
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = cards.length - 1;
    }

    if (currentSlide >= cards.length) {
        currentSlide = 0;
    }

    updateSlider();
}

updateSlider();

setInterval(function () {
    moveSlide(1);
},  10000);

updateSlider();

const heroCards = document.querySelectorAll(".hero-card");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");

heroCards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        heroCards.forEach(item => item.classList.remove("active"));
        card.classList.add("active");

        heroTitle.innerHTML = card.dataset.title;
        heroDesc.textContent = card.dataset.desc;
    });
});