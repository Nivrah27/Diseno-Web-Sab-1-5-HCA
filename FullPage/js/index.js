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

    // Animaciones con GSAP
    gsap.from(".service-box", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3
    });

    $(".service-box").hover(
        function() {
            gsap.to($(this).find("img"), { duration: 0.3, scale: 1.1 });
        },
        function() {
            gsap.to($(this).find("img"), { duration: 0.3, scale: 1 });
        }
    );

    $(".service-box a").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Slider
    const carousel = document.getElementById('projectCarousel');
    if(carousel) {
        const carouselItems = carousel.querySelectorAll('.custom-carousel-item');
        let currentIndex = 0;

        function showSlide(index) {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        }

        const prevControl = carousel.querySelector('.custom-carousel-control-prev');
        const nextControl = carousel.querySelector('.custom-carousel-control-next');

        if(prevControl && nextControl) {
            prevControl.addEventListener('click', function (e) {
                e.preventDefault();
                prevSlide();
            });

            nextControl.addEventListener('click', function (e) {
                e.preventDefault();
                nextSlide();
            });
        }

        showSlide(currentIndex);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const videoWrapper = document.querySelector(".warehouse-video-wrapper");
    const videoOverlay = document.querySelector(".warehouse-video-overlay");
    const video = videoWrapper.querySelector("iframe");

    videoWrapper.addEventListener("click", function() {
        video.src += (video.src.includes('?') ? '&' : '?') + 'autoplay=1'; // Agregar autoplay al iframe
        videoOverlay.style.display = "block";
        videoWrapper.classList.add("expanded");
        document.body.style.overflow = "hidden"; // Desactivamos el scroll del body
    });

    videoOverlay.addEventListener("click", function() {
        video.src = video.src.replace("&autoplay=1", "").replace("?autoplay=1", ""); // Remover autoplay
        videoOverlay.style.display = "none";
        videoWrapper.classList.remove("expanded");
        document.body.style.overflow = "auto"; // Reactivamos el scroll del body
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

$(document).ready(function(){
    // Desplazamiento suave al hacer clic en los enlaces del navbar y quicklinks
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

