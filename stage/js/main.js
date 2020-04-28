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
})