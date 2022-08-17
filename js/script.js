$(function() {
    window.onscroll = function() {scrollFunction()};

    "use strict";
    $('#preloader').on('click', function() {
        $(this).fadeOut();
    });
    /*-----------------------------------
     * STICKY MENU - HEADER
     *-----------------------------------*/
    var $navmenu = $('.nav-menu');
    $(window).on('scroll', function() {
        if ($navmenu.hasClass('not-sticky')) {
            return false;
        }
        if ($(window).scrollTop() > 500) {
            $navmenu.addClass('sticky-top');
        } else {
            $navmenu.removeClass("sticky-top");
        }
    });
    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
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
    /*-----------------------------------
     * MAGNIFIC POPUP
     *-----------------------------------*/
    var $videoPlay = $('.video-play');
    if ($videoPlay.length && $.fn.magnificPopup) {
        $videoPlay.magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        src: '//www.youtube.com/embed/%id%?autoplay=1&controls=1&showinfo=0&rel=0' // URL that will be set as a source for iframe.
                    }
                }
            }
        });
    }

});
// mobileCheck: function() {
//     return !(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
// }
/*end fn*/
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