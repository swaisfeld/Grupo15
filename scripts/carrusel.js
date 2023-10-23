let currentIndex = 0;
const images = document.querySelectorAll('.imagenes');

function nextImage() {
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
}

setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
