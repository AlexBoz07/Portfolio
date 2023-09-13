// Obtén la barra de navegación por su ID
const navbar = document.getElementById('navbar');


// Obtén la posición original de la barra de navegación
const originalPosition = navbar.offsetTop;
const navbarHeight = navbar.offsetHeight;

// Función para verificar y cambiar la posición de la barra de navegación
function fixNavbar() {
  if (window.scrollY >= originalPosition) {
    // Cuando el usuario ha desplazado lo suficiente hacia abajo
    navbar.classList.add('navbar-fixed'); // Aplica una clase CSS que fija la posición
    document.body.style.marginTop = navbarHeight + 'px';
    navbar.classList.remove('open');
  } else {
    // Cuando el usuario regresa a la parte superior
    navbar.classList.remove('navbar-fixed');
    document.body.style.marginTop = '0' // Elimina la clase CSS
  }
}

// Agrega un evento de desplazamiento (scroll) para llamar a la función
window.addEventListener('scroll', fixNavbar);

