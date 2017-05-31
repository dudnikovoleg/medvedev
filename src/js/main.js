(function ($) {
    $(document).ready(function () {



        var addressCont = $(".wrap");

        init();


        function init() {

            slider();// Slider olugin init
            stickSidebar ();
            mobMenu();
        }



        function minWindowSize(){
            var minWith  = 1279;

            if ($(window).width() >= minWith){
                addressPopup();//Slider lib initial
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
        var $status = $('.pagingInfo');
        var $slickElement = $('.slider');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' / ' + slick.slideCount);
        });

        $('.slider').slick({
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
            autoplay: true,
            infinite: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        touchMove: true
                    }
                }]
        });


        $('.pag-arrow').on('click', function () {
            $('.pag-arrow').css('z-index', '0')
        })


        $slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('.pag-arrow').css('z-index', '2')

        });
    }




        function addressPopup() {

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


        $(".time-list li ").click(function(e) {
            e.preventDefault();

            $(".time-list li").removeClass('active');

            $(this).addClass('active');
        });

        $('.time').keydown(function(e){
            e.preventDefault()
        });

        $(document).on('click', function(event) {
            if ($(event.target).closest(".time-list").length === 0 && $(event.target).closest(".time").length === 0  && $(event.target).closest(".time-icon").length === 0) {
                $(".time-list").removeClass('open')
                $(".timepicker").removeClass('arr-up')
            }
        });



        $("#datepicker").datepicker({

                format: 'mm.dd.yyyy',
                language: 'ru',
                container: '.wrapp-date',
                oldDates: true,
                newDates: false,
                templates: {
                    leftArrow: '<span class="left"> </span>',
                    rightArrow: '<span class="right"> </span>',
                }
            }).on('show', function(e) {
                $(".old ").text('')

            });


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
        })


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

    })
})(jQuery);



