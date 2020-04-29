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
    // Rightbar toggle
    $(".gear").on('click', function(){
        $(this).find('i').toggleClass('fa-spin');
        $('.rightbar').toggleClass('hideRight');
    })
    // Switch colors
    var themeClasses = [];
    $('.opt-color li').each(function(){
        themeClasses.push($(this).data('theme'));
    })
    $('.opt-color li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('body')
            .removeClass(themeClasses.join(" "))
            .addClass($(this).data('theme'));
    })
    // Switch Font Style
    var fontClasses = [];
    $('.opt-font select option').each(function(){
        fontClasses.push($(this).val());
    })
    $('.opt-font select').on('change', function(){
        $('body').removeClass(fontClasses.join(" ")).addClass($(this).find('option:selected').val());
    })
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