$(document).ready(function() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

 
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});

// bottom to up
$(window).on('scroll', function () { 
    var scrolled = $(window).scrollTop();
    if (scrolled > 500) $('.go-top').addClass('active');
    if (scrolled < 500) $('.go-top').removeClass('active');
});


$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 50);
});

$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 130});
});

$('#navbarSupportedContent .nav-item .nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
