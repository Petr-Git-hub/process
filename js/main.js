
$(document).ready(function () {

    $("input.telephone").inputmask("+7 (999) 999 99 99");

    $(".select").select2();

    $(function(){
        $(".range-slider").slider({
            range: 'max',
            min: 0,
            max: 5000,
            value: 1670,
            slide: function(event, ui){
                $("#range-slider-value").val(ui.value +" литров");
            }
        });
    });

});

const certificatesSwiper = new Swiper('.certificates-swiper', {
    lazy: true,
    zoom: true,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.certificates-swiper-button-next',
        prevEl: '.certificates-swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10
        },
        568: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30
        }
    }
});
const commentsSwiper = new Swiper('.comments-swiper', {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.comments-swiper-button-next',
        prevEl: '.comments-swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
    }
});
const partnersSwiper = new Swiper('.partners-swiper', {
    lazy: true,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 115,
    pagination: {
        el: '.partners-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        568: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 70
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 115
        }
    }
});



window.onload = function() {

    var body = document.querySelector('body');

    var hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener("click", function (e) {
        e.preventDefault();
        body.classList.toggle("hidden-header");
    });


    var svgMenuButton = document.querySelectorAll('.menu__li .arrow-btn');

    svgMenuButton.forEach(function(btn){
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            var parent = btn.closest(".menu__li");
            parent.classList.toggle("active");
        });
    });

};