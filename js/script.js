var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(window).scroll(function(){
  if(this.scrollY > 20){
    $("header").addClass("sticky");
    var inibtn = document.querySelector('.up-arow');
    inibtn.style.display = "block"
  }
  else{
    $("header").removeClass("sticky");
    var inibtn = document.querySelector('.up-arow');
    inibtn.style.display = "none"
  }
});

var inta = document.querySelector('.bxl-instagram');
var twit = document.querySelector('.bxl-twitch');

inta.addEventListener('click', function(){
  window.location.href = "https://www.instagram.com/equipeleagueoflego/"
});

twit.addEventListener('click', function(){
  window.location.href = "https://www.twitch.tv/leagueof_legos"
});
