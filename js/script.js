var bxMenu = document.querySelector('.bx-menu');
var bxX = document.querySelector('.bx-x');
var body = document.querySelector('body');
var nav = document.querySelector('nav');

bxMenu.addEventListener('click', function() {
  nav.style.left = "0%"
  body.style.overflow = "hidden"
});

bxX.addEventListener('click', function() {
  nav.style.left = "-100%"
  body.style.overflow = "visible"
});