
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Muestra el texto promocional
    const promoTexts = document.getElementsByClassName("promo-text");
    for (i = 0; i < promoTexts.length; i++) {
        promoTexts[i].style.display = "none";
    }
    promoTexts[slideIndex - 1].style.display = "block";

    // Cambia la diapositiva automáticamente cada 8 segundos
    setTimeout(() => {
        plusSlides(1);
    }, 8000); // 8 segundos
}

// Ajusta el tamaño de las imágenes cuando se carga la página y se redimensiona la ventana
window.onload = window.onresize = function () {
    let slides = document.getElementsByClassName("my-slide");
    for (let i = 0; i < slides.length; i++) {
        const img = slides[i].querySelector("img");
        if (img) {
            img.style.width = "100%";
            img.style.height = "auto";
        }
    }
};