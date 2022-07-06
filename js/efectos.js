$(document).ready(function () {

    // Efecto MENU
    $('.menu a').each(function (index, element) {
        // element == this
        $(this).css({
            'top':'-200px'
        })
        $(this).animate({'top': '0'},2000 + (index * 500));
    });
    //efecto header
    if( $(window).width() > 800){
        $('header .texto').css({
            opacity: 0, 
            marginTop:'40px'
        });
        $('header .texto').animate({
            opacity: 1, 
            marginTop:'100px'
        }, 1500);
        
    }

    // links menu

    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#menu').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

        $('#btn-acerca-de').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercaDe -80
            }, 500)
        });
        $('#btn-menu').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu + 500
            }, 500)
        });
        $('#btn-galeria').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria
            }, 500)
        });
        $('#btn-ubicacion').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion + 100
            }, 500)
        });

});