

//preloader
$(window).on("load",function(){
    //Preloader
    setTimeout("$('.page-loader div').fadeOut();",200);
    setTimeout("$('.page-loader').delay(200).fadeOut('slow');",200);
    setTimeout("$('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",200);
});







$(document).ready(function() {
    // hide over colors
    $(".product-colors__over").ready(function () {
        let max = 4;
        //let i = 0;
        $(".product-colors__over").each(function() {
            $(this).find('.product-color').each(function(){
                if ($(this).index()>=max){
                    $(this).addClass("color-over");
                }

            });
            if ($(this).find(".product-color").length<=max){
                $(this).find('.color-hidden').addClass("close-color");
                console.log( $(this))
            }
        });
        // $(".product-colors").each(function() {
        //     let count= $(this).find('.product-color').length;
        //     $(this).next('.color-hidden').html('Ещё( ' + count + ' )')
        // });

    });

    // $("a[rel=example_group]").fancybox({
    //     'transitionIn'		: 'none',
    //     'transitionOut'		: 'none',
    //     'titlePosition' 	: 'over',
    //     'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
    //         return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
    //     }
    // });

    $('.card-slider__modal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: false,
    });
    // $(function() {
    //     $('.card-slider__for div').on('click', function() {
    //         $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    //         $('#imagemodal').modal('show');
    //     });
    // });




    $('.color-hidden').click(function () {
        $(this).parents(".product-colors").find('.color-over').slideToggle(100);
        $(this).toggleClass('active');
    });



        //hide over filter items
        $(".filter-items").ready(function () {
            let max = 7;
            //let i = 0;
            $(".filter-items").each(function() {
                $(this).find('.filter-item').each(function(){
                    if ($(this).index()>=max){
                        $(this).addClass("filter-over");
                    }
                });
                if ($(this).find(".filter-item").length<max){
                    $(this).next('.filter-item__hidden').addClass('close-filter');
                }
                // i += 1;
                // if(i > max) {
                //     $(this).addClass("over");
                // }
            });
            $(".filter-items").each(function() {
                let count= $(this).find('.filter-over').length;
                $(this).next('.filter-item__hidden').html('( ' + count + ' )')
            });

        });

        $('.filter-item__hidden').click(function () {
            $(this).parents(".filter-drop").find('.filter-over').slideToggle(100);
            $(this).toggleClass('active');
        });


        // show review block
        $('.card-review__button').click(function () {
            $(this).parents(".card-content__tab").find('.card-review__write').slideToggle(100);
            $(this).toggleClass('active');
        });





        let countFilter = 4;
        $(".filter-item__good").html('(' + countFilter + ')')

        //anchor
        let $menu = $('.anchor-list');
        $('.anchor-list li.active').removeClass('active');
        $('.anchor-list li').first().addClass('active');
        $menu.find('a[href^="#"]').on('click', function(e){
            e.preventDefault();
            let start = $(window).scrollTop();
            let end = $($(this).attr('href')).offset().top - 10;
            // let delta = Math.abs(start - end);
            $('html, body').animate({
                scrollTop: end
            }, 500);
        });

        // let $span = $menu.before('<span class="active-line">').prev();

        $(window).on('scroll', function(){
            $('.anchor-list li.active').removeClass('active');
            let $activeLink = $menu.find('a[href^="#"]:first');
            let current = $(window).scrollTop() + 40;
            let offsetBottom = $('body').outerHeight() - current - $(window).height();
            if (offsetBottom > 300){
                $menu.find('a[href^="#"]').each(function(){
                    let $section = $($(this).attr('href'));
                    let start = $section.offset().top;
                    let end = start + $section.outerHeight();
                    if (current >= start && current < end) $activeLink = $(this);
                });
            } else {
                 $activeLink = $menu.find('a[href^="#"]:last');
            }
            $activeLink.parents('li').eq(0).addClass('active');
        }).trigger('scroll');




        $('#one').click(function() {
            $(".product-block").removeClass('twoBlock');
            $(".product-block").removeClass('threeBlock');
            $(".product-block").addClass('oneBlock');
            // window.dispatchEvent (new Event ('resize'));
            // $('.product-Mobslider').slick('resize');

            $('.product-Mobslider').slick('unslick');
            window.dispatchEvent (new Event ('resize'));
            $('.product-Mobslider').slick({
                arrows: false,
                dots: true,
                fade: false,
                // infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });
        $('#two').click(function() {
            $(".product-block").removeClass('oneBlock');
            $(".product-block").removeClass('threeBlock');
            $(".product-block").addClass('twoBlock');
            // window.dispatchEvent (new Event ('resize'));
            // $('.product-Mobslider').slick('resize');

            $('.product-Mobslider').slick('unslick');
            window.dispatchEvent (new Event ('resize'));
            $('.product-Mobslider').slick({
                arrows: false,
                dots: true,
                fade: false,
                // infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });
        $('#three').click(function() {
            $(".product-block").removeClass('twoBlock');
            $(".product-block").removeClass('oneBlock');
            $(".product-block").addClass('threeBlock');

            // $('.product-Mobslider').slick('resize');
            $('.product-Mobslider').slick('unslick');
            window.dispatchEvent (new Event ('resize'));
            $('.product-Mobslider').slick({
                arrows: false,
                dots: true,
                fade: false,
                // infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });

    $(".card-size").ready(function () {
        $(this).find(".card-color__item").each(function() {
            $(this).click(function(){
                $(this).parents('.card-size').find('.product-color.active').removeClass('active');
                $(this).find('.product-color').addClass('active');
              //  $(this).find('.product-color').toggleClass('active');
            })
        });
    });


    // $('.card-size .product-color').click(function(){
    //
    // });

    //cabinet tabs
    $('ul.cabinet-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.cabinet-tabs li').removeClass('current');
        $('.cabinet-content__tab').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    // data-picker
    $( function() {
        $( "#datepicker" ).datepicker();
    } );


    //card tabs
    $('ul.card-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.card-tabs li').removeClass('current');
        $('.card-content__tab').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    // color tabs
    // $('.card-color__item .product-color').click(function(){
    //     var col_id = $(this).attr('data-tab');
    //     console.log("tttt");
    //
    //     $('.card-color__item .product-color').removeClass('curr');
    //     $('.color-img__tab').removeClass('curr');
    //
    //     $(this).addClass('curr');
    //     $("#"+col_id).addClass('curr');
    // });






    $('.card-review__button').click(function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass("active");
        $(this).parents('.card-content__tab').find("card-review__write").toggleClass('card-review__write');
        // $(this).toggleClass('card-review__write');
    });

    //show/hide filter
    $('.filter-name').click(function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass("active");
        $(this).toggleClass('filter-drop');
    });

    $('.header-mob__list span').click(function () {
        // $(this).hide('header-mob__submenu');
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
    });




    $('.mobFilter').click(function () {
        $('.filter').slideToggle();
        $('.catalog-filter').toggleClass('open');
    });


    $('.header-burger').click(function () {
        $('.header-burger').toggleClass('active');
        $('.header-mob').toggleClass('active');
        $('body').toggleClass('open');
    });


    //remove-elements from basket
    $('.basket-remove').click(function () {
        $(this).parents('.cabinet-history__item').remove();
    });


    $('.modal-inputs__forgot').click(function () {
        $('#enter').modal('hide')
    });
    $('.modal-enterMob').click(function () {
        console.log('fffffsdf')
        $('#registration').modal('hide')
    });


    // header Mob
    $('.header-mob__bg').click(function () {
        $('.header-burger').removeClass('active');
        $('.header-mob').removeClass('active');
        $('body').removeClass('open');
        $('.header-mob__list>li').removeClass('active');
    });


    // HEADER PHONE SELECT
    $('.header-phone__click').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });

    // AUTHO SELECT
    $('.header-autho__click').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });

    //CATALOG SELECT
    $('.catalog-select__current').click(function () {
        // $(this).next().slideToggle();
        $(this).toggleClass("active");
    });


    $('.anchor-list a').click(function() {
        $(this).parents(".anchor-list").find('a').removeClass('active');
        $(this).addClass('active');
    });

    // BANNER SLIDER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.test').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
    });




    // basket-color hide
    $(".basket-color").ready(function () {
        let max = 5;
        //let i = 0;
        $(".basket-color").each(function() {
            $(this).find('.product-color').each(function(){
                if ($(this).index()>=max){
                    $(this).addClass("color-over");
                }
            });
            if ($(this).find(".product-color").length<max){
                $(this).next('.color-hidden').addClass('close-color');
            }
        });
        // $(".product-colors").each(function() {
        //     let count= $(this).find('.product-color').length;
        //     $(this).next('.color-hidden').html('Ещё( ' + count + ' )')
        // });

    });


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });




    // $('.slider__for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider__nav'
    // });
    //
    // $('.slider__nav').slick({
    //     slidesToShow: 3,
    //     prevArrow: '<div class="arrow-prev"></div>',
    //     nextArrow: '<div class="arrow-next"></div>',
    //     slidesToScroll: 1,
    //     asNavFor: '.slider__for',
    //     arrows: false,
    //     dots: false,
    //     centerMode: true,
    //     focusOnSelect: true,
    // });



    // catalog Mob slider
    $('.product-Mobslider').slick({
        arrows: false,
        dots: true,
        fade: false,
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });




    //product-card slider
    $('.card-slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card-slider__nav'
    });
    $('.card-slider__nav').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        asNavFor: '.card-slider__for',
        prevArrow: '<div class="card-prev"></div>',
        nextArrow: '<div class="card-next"></div>',
        // dots: true,
        // centerMode: true,
        focusOnSelect: true,
        vertical:true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             vertical:false,
        //         }
        //     },
        // ]

    });

    // index page product slider
    $('.product-slider').slick({
        arrows: false,
        dots: true,
        fade: false,
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.same-product').slick({
        arrows: false,
        dots: true,
        fade: false,
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    //select input on focus
    $('.filter-price-input').on('focus', function () {
        $(this).select();
    });

    // catalog select
    $('.catalog-select__head').on('click', function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
    });
    $('.catalog-select__wrap').on('click', 'li', function () {
        $('.catalog-select__head').removeClass('active');
        var val = $(this).text();
        var parent = $(this).closest('.catalog-select');
        $(parent).find('.catalog-select__current span').text(val).removeClass('active');
        $('.catalog-select__head input').val(val);
        $(parent).find('.catalog-select__wrap').slideUp(100);
    });
    $(document).click(function (e) {
        var elem = $('.catalog-select__head');
        if (elem.has(e.target).length === 0) {
            $('.catalog-select__head ').removeClass('active');
            $('.catalog-select__wrap').slideUp(100);
        }
    });



    // mouse over color-img

    let red = document.getElementById("red"),
        redPhoto = document.getElementById("redPhoto");
    red.onmouseover = function(){
        redPhoto.style.display = "block";

    };
    red.onmouseout = function(){
        redPhoto.style.display = "none";
    };

    let grey = document.getElementById("grey"),
        greyPhoto= document.getElementById("greyPhoto");
    grey.onmouseover = function(){
        greyPhoto.style.display = "block";
    };
    grey.onmouseout = function(){
        greyPhoto.style.display = "none";
    }

    let blue = document.getElementById("blue"),
        bluePhoto = document.getElementById("bluePhoto");
    blue.onmouseover = function(){
        bluePhoto.style.display = "block";
    };
    blue.onmouseout = function(){
        bluePhoto.style.display = "none";
    };

});


$(document).ready(function(){
    //range price
    let $priceMaxValue = Number($('#max-price').attr('data-max-value'));
    let $priceMinValue = Number($('#min-price').attr('data-min-value'));
    let $minPrice = $( "#min-price" );
    let $maxPrice = $( "#max-price" );
    let $rangePrice = $( "#price-range" );
    $rangePrice.slider({
        range: true,
        step: 10,
        min: 0,
        max: $priceMaxValue,
        values: [ $priceMinValue, $priceMaxValue ],
        stop: function(event, ui) {
            $minPrice.val(ui.values[ 0 ]);
            $maxPrice.val(ui.values[ 1 ]);
        },
        slide: function( event, ui ) {
            $minPrice.val(ui.values[ 0 ]);
            $maxPrice.val(ui.values[ 1 ]);

        }
    });

    //regexp from prise range
    function isNumeric(value){
        return (/^[\d]+$/g).test(value);
    }

    //update range price
    $minPrice.change(function(){
        // if($(this).val().split('')[0] == 0) $(this).val('0')
        let minValue = parseInt($(this).val());
        let maxValue = parseInt($maxPrice.val());
        if(isNumeric(minValue)){
            console.log('true');
            if(minValue < maxValue){
                $rangePrice.slider( "values", 0, minValue );
            }else{
                $rangePrice.slider( "values", 0, 0 );
                $(this).val(0);
            }
        }else{
            console.log('false');
            $( "#price-range" ).slider( "values", 0, $priceMinValue );
            $(this).val(0);

        }
    });
    $maxPrice.change(function(){
        let maxValue = parseInt($(this).val());
        let minValue = parseInt($minPrice.val());
        if(isNumeric(maxValue)) {
            if ($priceMaxValue > maxValue) {
                if (maxValue > minValue) {
                    $rangePrice.slider("values", 1, maxValue);
                } else {
                    $rangePrice.slider("values", 1, minValue);
                }
            } else {
                $(this).val($priceMaxValue);
                $("#price-range").slider("values", 1, $priceMaxValue);
            }
        }else{
            console.log('false');
            $( "#price-range" ).slider( "values", 1, $priceMaxValue );
            $(this).val($priceMaxValue);
        }


    });
    //reset filter
    $('#reset-filter').click(function () {
        setTimeout( () => {
            $minPrice.val($rangePrice.slider( "values", 0, 0 ));
            $maxPrice.val($rangePrice.slider( "values", 1, $priceMaxValue ));
            $minPrice.val(0);
            $maxPrice.val($priceMaxValue);
        }, 200);
    });


    //select input on focus
    $('.filter-price-input').on('focus', function () {
        $(this).select();
    });

    //default value
    $minPrice.val($rangePrice.slider( "values", 0 ));
    $maxPrice.val($rangePrice.slider( "values", 1 ));

});







