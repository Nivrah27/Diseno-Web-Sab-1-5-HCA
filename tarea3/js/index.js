// Obtener el botón de scroll up
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Función para mostrar u ocultar el botón dependiendo de la posición de desplazamiento
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Función para hacer scroll hacia arriba cuando se hace clic en el botón
scrollTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // Para navegadores que no soportan document.documentElement
    document.documentElement.scrollTop = 0; // Para navegadores modernos
});

// Obtener el botón de WhatsApp
const whatsappBtn = document.getElementById('whatsapp-chat');

// Función para abrir el chat de WhatsApp al hacer clic en el botón
whatsappBtn.addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=TUNUMERODETELEFONO&text=Hola,%20estoy%20interesado%20en%20contactarme%20contigo.', '_blank');
});

// Obtener los elementos del reproductor de audio
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');

// Función para reproducir o pausar el audio cuando se hace clic en el botón
playBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});
