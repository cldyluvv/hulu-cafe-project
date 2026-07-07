document.addEventListener("DOMContentLoaded", function () {

        //HERO CAROUSEL
    const heroCarousel = document.querySelector("#heroCarousel");

    new bootstrap.Carousel(heroCarousel, {
        interval: 4000,   // tukar gambar setiap 4 saat
        ride: "carousel",
        pause: false,     // tak berhenti bila mouse atas gambar
        wrap: true,       // lepas gambar terakhir, sambung gambar pertama
        touch: true       // boleh swipe dekat phone
    });

    // BACKGROUND MUSIC

 const music = document.getElementById("bgMusic");
 document.addEventListener("click", () => {
    music.play();
}, { once: true });
    const btn = document.getElementById("musicToggle");
    const icon = btn.querySelector("i");

    music.volume = 0.3;

    // Browser biasanya block autoplay
    document.body.addEventListener("click", function(){

        if(music.paused){
            music.play().catch(()=>{});
        }

    }, { once:true });

    btn.addEventListener("click", function(){

        if(music.paused){

            music.play();
            icon.className = "bi bi-volume-up-fill";

        }else{

            music.pause();
            icon.className = "bi bi-volume-mute-fill";

        }

    });

});