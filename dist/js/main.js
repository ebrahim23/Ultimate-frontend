const myMap = new Map();
const mySet = new Set();
$(function(){
    'use strict';
    $('.side-toggling').on('click', function(){
        $('.content, .sidebar').toggleClass('no-side');
    })
})