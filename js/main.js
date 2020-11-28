//Header scroll
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 140;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
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
jQuery.extend(jQuery.fn, {
    toplinkwidth: function(){
        var totalContentWidth = jQuery('#content').outerWidth(); // ширина блока с контентом, включая padding
        var totalTopLinkWidth = jQuery(this).children('a').outerWidth(true); // ширина самой кнопки наверх, включая padding и margin
        var h = jQuery(window).width()/2-totalContentWidth/2-totalTopLinkWidth;
        if(h<0){
            // если кнопка не умещается, скрываем её
            jQuery(this).hide();
            return false;
        } else {
            if(jQuery(window).scrollTop() >= 1){
                jQuery(this).show();
            }
            jQuery(this).css({'padding-right': h+'px'});
            return true;
        }
    }
});

jQuery(function($){
    var topLink = $('#top-link');
    topLink.css({'padding-bottom': $(window).height()});
    // если вам не нужно, чтобы кнопка подстраивалась под ширину экрана - удалите следующие четыре строчки в коде
    topLink.toplinkwidth();
    $(window).resize(function(){
        topLink.toplinkwidth();
    });
    $(window).scroll(function() {
        if($(window).scrollTop() >= 1 && topLink.toplinkwidth()) {
            topLink.fadeIn(300);
        } else {
            topLink.fadeOut(300);
        }
    });
    topLink.click(function(e) {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
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
    $('.window').toggle();
});

$('.window__closed').on('click', function () {
    $('.window').hide();
});
