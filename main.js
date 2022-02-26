// const { get } = require("cheerio/lib/api/traversing");

let close=document.querySelector(".close");
$(document).ready(function () {

    // sticky navigation menu

    let nav_offset_top = $('.container').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.container .nav-bar').addClass('navbar_fixed');
                } else {
                    $('.container .nav-bar').removeClass('navbar_fixed');

                }
            })
        }
    }

    navbarFixed();
    $(".home").click(function () {
        $('html, body').animate({
            scrollTop: $(".container").offset().top,

        }, 1000);
    });
    $(".project").click(function () {
        close.click();
        $('html, body').animate({
            scrollTop: $(".project-area").offset().top,

        }, 1000);
    });
    $(".about").click(function () {
        $('html, body').animate({
            scrollTop: $(".about-area").offset().top,

        }, 1000);
    });
    $(".exp").click(function () {
        close.click();
        $('html, body').animate({
            scrollTop: $(".tech").offset().top,

        }, 1000);
    });
    $(".talk").click(function () {
        close.click();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top,

        }, 1000);
    });

});


