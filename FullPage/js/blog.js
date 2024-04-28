document.addEventListener('DOMContentLoaded', function(){
    new WOW().init();
});

document.addEventListener('DOMContentLoaded', function () {
    // Dropdowns
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            var menu = this.nextElementSibling;
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.matches('.dropdown-toggle') && !e.target.matches('.dropdown-menu')) {
            var dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(function (menu) {
                menu.style.display = 'none';
            });
        }
    });

    // Parallax Background
    const images = [
        "imagenes/Daikin_GS_mainvisual_PC_Sydney%20jpg.jpg",
        "imagenes/Daikin_GS_mainvisual_PC_Pari%20jpg.jpg",
        "imagenes/pic_keyv_7_pc%20jpg.jpg"
    ];
    let currentIndex = 0;
    const bgElement = document.getElementById("parallax-bg");

    function changeBackground() {
        bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000);

    window.addEventListener("scroll", function() {
        const yOffset = window.pageYOffset;
        bgElement.style.backgroundPositionY = -yOffset * 0.5 + "px";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Mostrar u ocultar el botón basado en la posición de scroll
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) { // Aparecerá cuando se haya desplazado 300px
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Función para desplazarse al inicio de la página
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // desplazamiento suave
        });
    });
});