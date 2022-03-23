$(document).ready(function () {
    console.log("js ready")

    $('.menu').click(function (e) {
        e.preventDefault();
        $('.side-nav').animate({ left: '0' }, 350);
        $('.side-nav-backdrop').fadeIn(350);
    });

    $('.side-nav-backdrop, .close-btn').click(function (e) { 
        e.preventDefault();
        $('.side-nav').animate({ left: '-350px' }, 350);
        $('.side-nav-backdrop').fadeOut(350);
    });
});