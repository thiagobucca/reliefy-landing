$(function() {

    "use strict";
    $('#preloader').on('click', function() {
        $(this).fadeOut();
    });

    /*-----------------------------------
     * CAROUSEL / SLIDERS
     *-----------------------------------*/
    var $screenSlider = $('.screen-slider');
    if ($screenSlider.length && $.fn.owlCarousel) {
        // Screen Slider
        $screenSlider.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            nav: false,
            items: 1,
            dots: false,
        });
    }
    var $clientSlider = $('.client-slide');
    if ($clientSlider.length && $.fn.owlCarousel) {
        // Client Slider
        $('.client-slide').owlCarousel({
            margin: 30,
            loop: true,
            autoWidth: true,
            autoplay: true,
            items: 5
        });
    }
    var $galleryCarouselDiv = $('.screen-carousel-1');
    if ($galleryCarouselDiv.length && $.fn.owlCarousel) {
        // Gallery Slider
        $galleryCarouselDiv.owlCarousel({
            loop: true,
            center: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 50,
                    autoWidth: false,
                    dots: true
                },
                600: {
                    items: 4,
                    margin: 100,
                    autoWidth: true,
                    dots: false
                }
            }
        });
    }
    var $detailedCarousel = $('.detailed-carousel');
    if ($detailedCarousel.length && $.fn.owlCarousel) {
        $detailedCarousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }
    var $loopDiv = $('.loop');
    if ($loopDiv.length && $.fn.slick) {
        $loopDiv.slick({
            centerMode: true,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
        });
    }

});

$(window).on('load', function() {
    /*-----------------------------------
     * PRELOADER
     *-----------------------------------*/
    $("#preloader").fadeOut();
    /*-----------------------------------
     * ON SCROLL ANIMATION
     *-----------------------------------*/
    var scrollAnimate = $('body').data('scroll-animation');
    if (scrollAnimate === true) {
        new WOW({
            boxClass: 'reveal',
            mobile: false
        }).init()
    }

});

$(document).on("scroll", function(){
    if($(document).scrollTop() > 100)
    {
       $("#logo").addClass("shrink");
    }
    else
    {
        $("#logo").removeClass("shrink");
    }
});