// Navegación por secciones
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const destino = link.getAttribute("href").substring(1);

    document.querySelectorAll(".seccion").forEach(seccion => {
      seccion.classList.remove("activa");
    });

    const seccionActiva = document.getElementById(destino);
    if (seccionActiva) {
      seccionActiva.classList.add("activa");
      window.scrollTo(0, 0);
    }
  });
});

function irAProyecto() {
  document.querySelectorAll(".seccion").forEach(seccion => {
    seccion.classList.remove("activa");
  });
  const seccionProyecto = document.getElementById("proyecto");
  seccionProyecto.classList.add("activa");
  window.scrollTo(0, 0);
}

function irAFadesa() {
  const url ="https://fadesa.org/"; // Cambia esto por el enlace al que deseas redirigir
  window.location.href = url; // Redirige al enlace especificado
  window.open(url, "_blank");
}
