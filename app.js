// Función para cambiar al modo oscuro
function toggleDarkMode() {
    let body = document.body;
    let container = document.getElementById('container');
    let button = document.getElementById('toggleMode');

    // Cambiar estilos para el modo oscuro
    body.style.backgroundColor = '#1a1a1a'; // Fondo oscuro
    body.style.color = '#f0f0f0'; // Texto claro
    container.style.borderColor = '#666666'; // Borde oscuro
    button.style.backgroundColor = '#555555'; // Fondo de botón oscuro
    button.style.color = '#ffffff'; // Texto en botón oscuro
}

// Evento click para cambiar entre modo claro y oscuro
document.getElementById('toggleMode').addEventListener('click', function () {
    var body = document.body;
    var currentMode = body.classList.contains('dark-mode');

    // Cambiar clases para el cuerpo de la página
    if (currentMode) {
        body.classList.remove('dark-mode');
        // Restablecer estilos al modo claro
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#333333';
        document.getElementById('container').style.borderColor = '#cccccc';
        document.getElementById('toggleMode').style.backgroundColor = '#007bff';
        document.getElementById('toggleMode').style.color = '#ffffff';
    } else {
        body.classList.add('dark-mode');
        toggleDarkMode(); // Cambiar a modo oscuro
    }
});
