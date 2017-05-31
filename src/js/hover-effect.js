
function hoverEffectInit(){
    var minWith  = 1279;

    if ($(window).width() >= minWith){
        hoverEffect  ()//Hover effect initial
    }
}

$(window).ready(hoverEffectInit);
$(window).resize(hoverEffectInit);


function hoverEffect  (){

    $('header .board-img li ').on('mouseleave', function (e) {

        var jEl = $(this),
            w = jEl.outerWidth(),
            h = jEl.outerHeight(),
            off = jEl.offset(),
            x = e.pageX - off.left,
            y = e.pageY - off.top,
            xShift, // сдвиг от правой или левой границы
            yShift, // сдвиг от верхней или нижней границы
            xOs,
            yOs,
            itemOut;
        if (x / w > .5) {

            xShift = w - x;
            xOs = 0;
        } else {
            xShift = x;
            xOs = 1;
        }

        if (y / h > .5) {
            yShift = h - y;
            yOs = 2;
        } else {
            yShift = y;
            yOs = 3;
        }
        direction = (xShift < yShift) ? xOs : yOs;



        switch ( direction ) {
            case 0 : itemOut = 'out-right col-lg-15 col-md-6 col-xs-12';   break;
            case 1 : itemOut = 'out-left col-lg-15 col-md-6 col-xs-12' ;  break;
            case 2 : itemOut = 'out-bottom col-lg-15 col-md-6 col-xs-12'; break;
            case 3 : itemOut = 'out-top col-lg-15 col-md-6 col-xs-12';    break;
        }

        this.className =  itemOut;

    });



    $('header .board-img li ').on('mouseenter', function (e) {

        var jEl = $(this),
            w = jEl.outerWidth(),
            h = jEl.outerHeight(),
            off = jEl.offset(),
            x = e.pageX - off.left,
            y = e.pageY - off.top,
            xShift, // сдвиг от правой или левой границы
            yShift, // сдвиг от верхней или нижней границы
            xOs,
            yOs;
        if (x / w > .5) {
            xShift = w - x;
            xOs = 0;
        } else {
            xShift = x;
            xOs = 1;
        }

        if (y / h > .5) {
            yShift = h - y;
            yOs = 2;
        } else {
            yShift = y;
            yOs = 3;
        }

        direction = (xShift < yShift) ? xOs : yOs;

        switch ( direction ) {
            case 0 : itemIn = 'in-right col-lg-15 col-md-6 col-xs-12' ;   break;
            case 1 : itemIn = 'in-left col-lg-15 col-md-6 col-xs-12' ;  break;
            case 2 : itemIn = 'in-bottom col-lg-15 col-md-6 col-xs-12';   break;
            case 3 : itemIn = 'in-top col-lg-15 col-md-6 col-xs-12';     break;
        }

        this.className =  itemIn;

    });
}
