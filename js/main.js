// Скрипт для плавного перехода для якорных ссылок по сайту

//Header scroll
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 140;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1200);
    e.preventDefault();
});

//Navigation menu
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

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
    $('.window').toggle();
});

$('.window__closed').on('click', function () {
    $('.window').hide();
});