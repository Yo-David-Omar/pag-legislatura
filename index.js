// JavaScript para cambiar la imagen al hacer scroll

// Selecciona la imagen y define las imágenes que se mostrarán
const imageElement = document.getElementById('scrollImage');
const images = ['booksantique.jpg', 'primerimagen.jpg']; // Rutas a tus imágenes
let currentIndex = 0;

// Detecta el evento de scroll
window.addEventListener('scroll', () => {
    // Calcula la posición del scroll y decide qué imagen mostrar
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight / images.length;

    // Calcula el índice de la imagen en función de la posición del scroll
    const newIndex = Math.floor(scrollPosition / threshold);

    // Evita cambiar la imagen si el índice es el mismo
    if (newIndex !== currentIndex && newIndex < images.length) {
        currentIndex = newIndex;
        imageElement.src = images[currentIndex];
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const a = document.querySelectorAll('.carousel-inner a');
    
    let index = 0;
    const totalImages = a.length;

    function updateCarousel() {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index <= 0) ? totalImages - 1 : index - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index >= totalImages - 1) ? 0 : index + 1;
        updateCarousel();
    });
});

// Función para actualizar el reloj
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj al cargar la página
updateClock();


function showImage(imageId) {
    // Ocultar todas las imágenes
    const images = document.querySelectorAll('.image-container img');
    images.forEach(function(image) {
        image.style.display = 'none';
    });

    // Mostrar la imagen correspondiente
    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'block';
}

// Función para ocultar la imagen al hacer clic fuera del dropdown o la imagen
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const imageContainer = document.querySelector('.image-container');
    let isClickInsideDropdown = false;
    
    dropdowns.forEach(function(dropdown) {
        if (dropdown.contains(event.target)) {
            isClickInsideDropdown = true;
        }
    });

    // Si el clic es fuera de los dropdowns y de la imagen, ocultamos la imagen
    if (!isClickInsideDropdown && !imageContainer.contains(event.target)) {
        const images = document.querySelectorAll('.image-container img');
        images.forEach(function(image) {
            image.style.display = 'none';
        });
    }
});
//mensaje de whatsapp   
    const textarea = document.getElementById('area');
    const button = document.getElementById('submitButton');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const form = document.getElementById('myForm');

    // Función para habilitar/deshabilitar el botón de enviar
    function toggleSubmitButton() {
        if (textarea.value.length >= 5) {
            button.disabled = false;
            feedbackMessage.textContent = ''; // Limpiar mensaje si cumple el mínimo
        } else {
            button.disabled = true;
            feedbackMessage.textContent = 'El mensaje debe tener al menos 5 caracteres.';
            feedbackMessage.classList.add('error');
        }
    }

    // Escuchar cambios en el textarea
    textarea.addEventListener('input', toggleSubmitButton);

    // Inicializar el estado del botón al cargar la página
    toggleSubmitButton();


     // Función que inicia el cambio de imágenes y el difuminado
     window.onload = function() {
        setTimeout(function() {
          // Aplica el difuminado a la primera imagen y muestra la segunda imagen
          document.getElementById('image1').classList.add('hidden'); // Aplica la clase hidden a la primera imagen
          document.getElementById('image2').classList.remove('hidden'); // Muestra la segunda imagen
        }, 10000); // Después de 10 segundos
      };