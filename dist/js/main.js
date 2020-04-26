const myMap = new Map();
const mySet = new Set();
$(function(){
    'use strict';
    $('.side-toggling').on('click', function(){
        $('.content, .sidebar').toggleClass('no-side');
    });
    // Toggle submenu
    $(".arrows").on('click', function(){
        $(this).find('.fa-arrow-circle-right').toggleClass('down');
        $(this).next('.sub-links').slideToggle();
    })
})