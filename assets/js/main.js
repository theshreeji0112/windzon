/*=====================================================
Template Name   : Windzon
Description     : Windows And Doors Service 
Author          : Themesland
Version         : 1.2
=======================================================*/


(function ($) {
    
    "use strict";


    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // navbar search 
    $('.search-btn').on('click', function() {
        $('.search-area').toggleClass('open');
    });


    // wow init
    if (typeof WOW !== "undefined") {
        new WOW().init();
    }


    // hero slider
    if ($.fn.owlCarousel && $('.hero-slider').length) {
        $('.hero-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            items: 1,
            navText: [
                "<i class='far fa-long-arrow-left'></i>",
                "<i class='far fa-long-arrow-right'></i>"
            ],

            onInitialized: function(event) {
                var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
                doAnimations($firstAnimatingElements);
            },

            onChanged: function(event){
                var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
                doAnimations($firstAnimatingElements);
            }
        });
    }

    //hero slider do animations
    function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationDuration = $this.data('duration');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}


    // testimonial-slider
    if ($.fn.owlCarousel && $('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }


    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    if ($.fn.countTo && $.fn.appear && $('.counter').length) {
        $('.counter').countTo();
        $('.counter-box').appear(function () {
            $('.counter').countTo();
        }, {
            accY: -100
        });
    }


    // magnific popup init
    if ($.fn.magnificPopup) {
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }



    // scroll to top
    $(window).scroll(function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").addClass('active');
        } else {
            $("#scroll-top").removeClass('active');
        }
    });

    $("#scroll-top").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    // navbar fixed top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // project filter
    $(window).on('load', function () {
        if ($.fn.isotope && $(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btn').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btn li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


})(jQuery);










