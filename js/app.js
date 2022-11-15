// Variables
const btnEnviar = document.querySelector("#enviar");

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", iniciarApp);
}

// Funciones
function iniciarApp() {
    btnEnviar.disable = true;
    btnEnviar.classList.add("cursos-not-allowed", "opacity-50");
}