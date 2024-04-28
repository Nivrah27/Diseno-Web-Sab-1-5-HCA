document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM cargado");

    const userInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('btn-login');

    console.log("Input de Usuario:", userInput);
    console.log("Input de Contraseña:", passwordInput);

    // Escuchar evento de click en el botón de login
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón

        const username = userInput.value;
        const password = passwordInput.value;

        console.log("Usuario ingresado:", username);
        console.log("Contraseña ingresada:", password);

        let error_count = 0;
        let text = "";

        // Validación de campos vacíos
        if (username === "" || password === "") {
            text = "Los campos requeridos no pueden estar vacíos";
            validation_alert(text);
            error_count++;
        }

        // Validación de credenciales
        if (error_count === 0) {
            if (username === "hcarrilloa" && password === "123") {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Redirigiendo a la página principal...',
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
                    console.log("Redirigiendo a index.html...");
                    window.location.href = "index.html";
                });
            } else {
                text = "Usuario o contraseña incorrectos";
                validation_alert(text);
            }
        }
    });
});

function validation_alert(ptext) {
    Swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de Nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/22fb24a2-a7f0-461a-9e36-be75f0cb0e80/tQXDNUDBsy.json"></iframe><br><p>' + ptext + "<p>",
    });
}
