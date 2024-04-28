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
});

// Inicializa el mapa
function initMap() {
    // Coordenadas de San José, Costa Rica
    var sanJose = { lat: 9.9281, lng: -84.0907 };

    // Opciones del mapa
    var mapOptions = {
        zoom: 15, // Zoom del mapa
        center: sanJose // Centra el mapa en San José, Costa Rica
    };

    // Crea el mapa y lo muestra en el contenedor con el ID "map"
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcador en la ubicación de la compañía
    var marker = new google.maps.Marker({
        position: sanJose,
        map: map,
        title: 'Ubicación de la compañía'
    });
}


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