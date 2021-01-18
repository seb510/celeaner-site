//Header scroll
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 140;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
    e.preventDefault();
});

//Navigation menu
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

//Ub button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Happy New Year
//Snow
jQuery(document).ready(function(){
    $(document).snowfall({
        flakeCount: 30,
        image :"img/snow1.png",
        minSize: 5,
        maxSize:20,
        round: true,
        shadow: false,
    });
});

//Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ["&lang;", "&rang;"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// Функция Modal Window
$('.offer__btn').on('click', function () {
    $('.window').fadeIn('slowly');
});

$('.window__closed').on('click', function () {
    $('.window').slideUp('slowly');
});



