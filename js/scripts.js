var imagenContainer = document.getElementById('imagen-container');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var viewportHeight = window.innerHeight;

  if (scrollPosition > viewportHeight) {
    imagenContainer.classList.add('mostrar');
  } else {
    imagenContainer.classList.remove('mostrar');
  }
});


function reproducirCancion() {
  var reproductor = document.getElementById('reproductor');
  reproductor.play();
}
