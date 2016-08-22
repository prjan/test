// jQuery.noConflict();
( function ($) {
    'use strict';
    $(document).ready(function () {
        //
        //     $(window).scroll(function () {
        //         var scroll = $(window).scrollTop();
        //
        //         if (scroll >= 97) {
        //             $('body').addClass('scroll');
        //             $('.navbar').addClass('scroll');
        //         } else {
        //             $('body').removeClass('scroll');
        //             $('.navbar').removeClass('scroll');
        //         }
        //
        //         if (scroll <= 0) {
        //             $('#mainNav li a').parent().siblings().removeClass('active')
        //             $('#mainNav li:first-child').addClass('active');
        //         }
        //     });
        //
        //     $('#scroll-to-top').click(function () {
        //         $('body,html').animate({
        //             scrollTop: 0
        //         }, 500);
        //     });
        //     $('#mainNav li:first-child').addClass('active');
        //
        //     $('#mainNav li a').click(function () {
        //         $(this).parent().siblings().removeClass('active')
        //         $(this).parent().addClass('active');
        //     });
        //
        //     $('.scroll').smoothScroll({
        //         offset: -78,
        //         speed: 1200
        //     });
        //


        $('.owl-carousel').owlCarousel({
            stagePadding: 200,
            loop:true,
            margin:0,
            nav:true,
            navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $('.owl-carousel2').owlCarousel({
            stagePadding: 150,
            loop:false,
            startPosition: 0,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        $('#fullpage').fullpage({
        });
    });

}(jQuery));