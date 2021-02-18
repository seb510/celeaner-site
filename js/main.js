//Header scroll
$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 140;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
    e.preventDefault();
});

//Navigation menu
document.querySelector('.menu__btn').addEventListener('click', function() {
    document.querySelector('.menu__btn span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
    $('.menu__list li a').click(function() {
        if ($('.menu__btn span').hasClass('active')) {
            $('.menu__btn span').removeClass('active');
            $('.menu').removeClass("animate");
        }
    })
});

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
    $('html, body').animate({ scrollTop: 0 }, '300');
});


//Slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: true,
    navText: ["&lang;", "&rang;"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

// Функция Modal Window
$('.offer__btn').on('click', function() {
    $('.window').fadeIn('slowly');
});

$('.window__closed').on('click', function() {
    $('.window').slideUp('slowly');
});
