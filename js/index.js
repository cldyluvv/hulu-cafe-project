document.addEventListener("DOMContentLoaded", function () {

    const heroCarousel = document.querySelector("#heroCarousel");

    new bootstrap.Carousel(heroCarousel, {
        interval: 4000,   // tukar gambar setiap 4 saat
        ride: "carousel",
        pause: false,     // tak berhenti bila mouse atas gambar
        wrap: true,       // lepas gambar terakhir, sambung gambar pertama
        touch: true       // boleh swipe dekat phone
    });

});