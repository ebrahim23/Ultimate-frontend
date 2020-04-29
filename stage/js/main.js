$(function(){
    'use strict';
    // Toggle Sidebar
    $('.side-toggling').on('click', function(){
        $('.content, .sidebar').toggleClass('no-side');
    });
    // Toggle Submenu
    $(".arrows").on('click', function(){
        $(this).find('.fa-arrow-circle-right').toggleClass('down');
        $(this).next('.sub-links').slideToggle();
    })
    // Full Screen
    $(".fullscreen").on('click', function(){
        $(this).toggleClass('full-screen')
        if($(this).hasClass('full-screen')) {
            openScreen();
        }else {
            closeScreen();
        }
    })
    var elem = document.documentElement;

    /* View in fullscreen */
    function openScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    }

    /* Close fullscreen */
    function closeScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
    }
})