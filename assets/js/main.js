// jQuery.noConflict();
( function ($) {
    'use strict';
    $(document).ready(function () {



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
            itemsCustom : [
                [0, 2],
                [450, 4],
                [600, 7],
                [700, 9],
                [1000, 10],
                [1200, 12],
                [1400, 13],
                [1600, 15]
            ],
            margin:20,
            loop: false
        });
        $('#fullpage').fullpage({});

        $('.scroll').click(function(){
            $.fn.fullpage.moveSectionDown();
        });
    });

}(jQuery));