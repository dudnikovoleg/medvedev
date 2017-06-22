
(function ($) {

/*** Preloader ***/
    $(window).on('load', function () {
        var sliderPreloaderItem = $('.slider-img, .photo, .header-main, container-fluid')
        sliderPreloaderItem.removeClass('preloader')
    });

    $(document).ready(function () {

        $('.directions-select-list').perfectScrollbar();



        init();


        function init() {

            slider();// Slider olugin init
            stickSidebar ();//Slider init
            mobMenu();//Mobile menu init
            fbForm()//Fit back form init
            profileScroll()//Profile smooth scroll
            subUslugaScroll()//sub usluga scroll
            responsePopup()//Response thank text pop-up

        }



        function minWindowSize(){
            var minWith  = 1279;

            if ($(window).width() >= minWith){
                addressPopup();//Show address pop up
                searchForm();//Search form initial
            }
        }

        $(window).ready(minWindowSize);
        $(window).resize(minWindowSize);



/**************************/
/** Sidebar fixed lib initial **/
/**************************/


        function stickSidebar () {
            if ( screen.width <= 1279) {

                $("#sidebar").trigger("sticky_kit:detach");

            }else {

                $("#sidebar").stick_in_parent({});
            }
        }
        $(window).ready(stickSidebar);
        $(window).resize(stickSidebar);


/**************************/
/** Slider lib initial **/
/**************************/

    function slider () {




        /**************************/
        /** Main slider lib initial **/
        /**************************/




        var aboutStatus = $('.pagingInfo'),
            mainSlider = $('#mainSlider'),

            clinicSlider    = $('#clinicSlider'),
            profileSlider   = $('#profileSlider'),
            licenseSlider   = $('#licenseSlider'),
            doctorsSlider   = $('#doctorsSlider');




        /*pagination fo each slider*/

        mainSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        clinicSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        profileSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });
        doctorsSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            aboutStatus.text(i + ' / ' + slick.slideCount);
        });



        /*Initial all the same slider*/

        $('#mainSlider, #clinicSlider, #profileSlider, #doctorsSlider').slick({
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true
        });

        $('.pag-arrow').on('click', function () {
            $('.pag-arrow').css('z-index', '0');
            setTimeout(
                function(){$('.pag-arrow').css('z-index', '2')},
                500);
        }).on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('.pag-arrow').css('z-index', '2')
        });





        /**************************/
        /***** License slider *****/
        /**************************/



        licenseSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: $('.license-slider .prev-arrow'),
            nextArrow: $('.license-slider .next-arrow')
        })
    }




        /**************************/
        /** Addresss pop-up **/
        /**************************/




        function addressPopup() {
            var addressCont = $(".wrap");

            $('header .wrap').on('click', function () {
                addressCont.addClass('open');
                $('header .closed').css('display', 'block');
            });

            $('header .closed').on('click', function () {
                addressCont.removeClass('open');
            });

            $(document).on('click', function(event) {
                if ($(event.target).closest(".wrap").length === 0) {
                    addressCont.removeClass('open');
                    $('header .closed').css('display', 'none');
                }
            })
        }



        /**************************/
        /** Search form resize **/
        /**************************/




    function searchForm() {
        $('.search-icon').hover(
            function(){
                $('.form-control').addClass('open')
            },
            function(){
                $('.search-icon').removeClass('open')
                $('.form-control').removeClass('open')
            });

    }






/**************************/
/** Pop up**/
/**************************/


        function fbForm() {


            $('.btn-feedback .btn').on('click', function () {
                $('.pop-up').addClass('open')
            });

            $('.pop-up .closed-ic').on('click', function () {
                $('.pop-up').removeClass('open')
            });


            $(".time-list li").on('click', function () {

                time = $(this).text();

                $('#time').val(time);

            });

            $('#time ').on('click', function () {
                $(".time-list").addClass('open')

                $(".timepicker").addClass('arr-up')
            });

            $(' .time-icon ').on('click', function () {
                $(".time-list").toggleClass('open')
                $(".timepicker").toggleClass('arr-up')
            });


            $(".time-list li ").click(function (e) {
                e.preventDefault();

                $(".time-list li").removeClass('active');

                $(this).addClass('active');
            });

            $('.time').keydown(function (e) {
                e.preventDefault()
            });

            $(document).on('click', function (event) {
                if ($(event.target).closest(".time").length === 0 && $(event.target).closest(".time-icon").length === 0) {
                    $(".time-list").removeClass('open')
                    $(".timepicker").removeClass('arr-up')
                }
            });

            $(document).on('keyup, input', "#time, #datepicker", function (event) {

                $(this).prop('value', $(this).val().replace(/[^0-9.\d]/gim, ''))
            })


            $("#datepicker").datepicker({
                todayHighlight: true,

                format: 'mm.dd.yyyy',
                language: 'ru',
                container: '.wrapp-date',
                oldDates: true,
                newDates: false,
                disableTouchKeyboard: true,
                autoclose: true,
                templates: {
                    leftArrow: '<span class="left"> </span>',
                    rightArrow: '<span class="right"> </span>',
                }
            }).on('show', function () {
                $(".old ").text('')
                $(".old ").addClass('disabled')


                $(".today").prevAll().addClass('prev-item disabled')

                $(".today").parent().prevAll('tr').addClass('prev-per')
                $(".today").parent().prevAll('tr').children().addClass(' disabled')

            });

        }

/***** Thank text pop-up  *****/
        function responsePopup() {


            $('#sendBotton').on('click', function () {
                $('.response').addClass('open');
            });

            $('.response-close').on('click', function () {
                $('.response').removeClass('open');
            });

            $(document).on('click', function(event) {
                if ($(event.target).closest(".response-text").length === 0 && $(event.target).closest("#sendBotton").length === 0  ) {
                    $('.response').removeClass('open');
                }
            })
        }



        function windowSize(){
            var maxWith  = 1920;

            if ($(window).width() >= maxWith){
                var  necWidth  = $(window).width() - maxWith;

                $('.pop-up').css({right : necWidth + 'px'});
            }
            else{
                $('.pop-up').css({right :   '0'});

            }
        }

        $(window).ready(windowSize);
        $(window).resize(windowSize);



        /**************************/
        /** Mobile menu **/
        /**************************/

        function mobMenu() {


            $(".navTrigger").on('click', function () {

                $(this).toggleClass('active');

                $('.sidebar').toggleClass('open');

                $('body').toggleClass('fixed');

                $('.blackout').toggleClass('dark-bg');

            });


            $(document).on('click', function () {
                if ($(event.target).closest(".sidebar").length === 0 && $(event.target).closest(".main-content .logo").length === 0) {

                    $('.navTrigger').removeClass('active');

                    $('.sidebar').removeClass('open');

                    $('body').removeClass('fixed');

                    $('.blackout').removeClass('dark-bg');
                }
            })
        }


        $(" .title").on('click',function(){

            if ($(this).hasClass("show")){

                $(this).removeClass('show')

            }else{
                $(" .title").removeClass('show')

                $(this).addClass('show')

            }
        });


        function positionSoc () {

            var  sidebarH = $('.sidebar').height(),
                windowH = $(window).height();


                if ( sidebarH + 100 <= windowH) {
                    $('.social').addClass('fixed')

                }else {

                    $('.social').removeClass('fixed')

                }
            }
            $(window).ready(positionSoc);
            $(window).resize(positionSoc);






        /**************************/
        /** Doctor profile smooth scroll **/
        /**************************/





        function profileScroll() {
            $('.link-ask').click(function() {

                $('html, body').animate({scrollTop: $("#questionForm").offset().top}, 800);

            });
        }






        /**************************/
        /** Sub usluga smooth scroll **/
        /**************************/





        function subUslugaScroll() {
            $('.btn-feedback').click(function() {

                $('html, body').animate({scrollTop: $("#contact-form-anchor").offset().top}, 500);

            });
        }

    })
})(jQuery);



