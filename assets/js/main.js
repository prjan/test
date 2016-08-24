jQuery.noConflict();
( function ($) {
    'use strict';
    $(document).ready(function () {

        $('.owl-carousel').owlCarousel({
            stagePadding: 200,
            loop: true,
            margin: 0,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 80
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        $('.owl-carousel2').owlCarousel({
            itemsCustom: [
                [0, 2],
                [450, 4],
                [600, 7],
                [500, 9],
                [500, 10],
                [1200, 12],
                [1400, 13],
                [1600, 15]
            ],
            margin: 20,
            loop: false
        });
        $('#fullpage').fullpage({});
        
        $('.scroll').click(function () {
            $.fn.fullpage.moveSectionDown();
        });

        $("#popup-video").click(function () {
            $("#video-popup").fadeIn(500);
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        });
        $("#close-btn-video").click(function () {
            $("#video-popup").fadeOut(500);
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        });

        $("#popup-form").click(function () {
            $("#form-popup").fadeIn(500);
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        });
        $("#close-btn-form").click(function () {
            $("#form-popup").fadeOut(500);
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        });
        
    });
}(jQuery));