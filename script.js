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

// Toggle menu celu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const logo = document.getElementById("dynamic-logo");

// Función para cambiar el logo con efecto de desvanecimiento
function cambiarLogo(src) {
  logo.style.opacity = 0;

  setTimeout(() => {
    logo.src = src;
    logo.style.opacity = 1;
  }, 200); // Espera 200ms para cambiar la imagen
}

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const destino = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
      seccion.classList.remove("activa");
    });

    // Muestra la sección activa
    const seccionActiva = document.getElementById(destino);
    if (seccionActiva) {
      seccionActiva.classList.add("activa");
      window.scrollTo(0, 0); // Esto lo podés sacar si no querés que suba

      // Cambia el logo según la sección con animación
      switch (destino) {
        case "inicio":
          cambiarLogo("images/casa.png"); 
          break;
        case "app":
          cambiarLogo("images/celular.png"); 
          break;
        case "equipo":
          cambiarLogo("images/personas.png"); 
          break;
        case "patrocinadores":
          cambiarLogo("images/manos.png");
          break;
        case "contacto":
          cambiarLogo("images/mail.png"); 
          break;
        default:
          cambiarLogo("images/logo-recuerdame.png");
      }
    }
  });
});




function irAProyecto() {
  const seccionProyecto = document.querySelector(".contenido-proyecto");
  document.querySelector(".contenido-inicio").classList.add("oculto");
  seccionProyecto.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Seleccionamos las secciones
const contenidoInicio = document.querySelector(".contenido-inicio");
const contenidoProyecto = document.querySelector(".contenido-proyecto");
const contenidoFunciona = document.querySelector(".contenido-funciona");

// Primer observer: controla si mostrar u ocultar el inicio
const observerInicio = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contenidoInicio.classList.add("oculto");
    } else {
      contenidoInicio.classList.remove("oculto");
    }
  });
}, {
  threshold: 0.3
});

observerInicio.observe(contenidoProyecto);

// Segundo observer: controla si mostrar u ocultar el proyecto
const observerProyecto = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contenidoProyecto.classList.add("oculto");
    } else {
      contenidoProyecto.classList.remove("oculto");
    }
  });
}, {
  threshold: 0.3
});

observerProyecto.observe(contenidoFunciona);

const observerFunciona = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contenidoFunciona.classList.add("oculto");
    } else {
      contenidoFunciona.classList.remove("oculto");
    }
  });
}, {
  threshold: 0.5
});

observerFunciona.observe(contenidoProyecto);


function irAFadesa() {
  const url ="https://fadesa.org/";
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  if (footer) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add("show-footer");
            observer.unobserve(footer); // <- solo se activa una vez
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
  }
});





