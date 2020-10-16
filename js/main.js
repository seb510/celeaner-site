// Скрипт для плавного перехода для якорных ссылок по сайту

//Header scroll
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0 );
});

//Navigation menu
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

//Slider  
$('.slider-wrapper').slick({
	infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
	slidesToShow: 2,
    responsive: [
                {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]    
});

