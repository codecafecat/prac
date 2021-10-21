$(function() {
    $('.intro').addClass('go');  
});

$(function(){
    $(".container").css("display", "none");
    setTimeout(function() {
        $('header').fadeOut();
        }, 5000);
});

$(function(){
    $(".container").css({opacity:'0'});
    setTimeout(function(){
    $(".container").css("display", "block");
    $(".container").stop().animate({opacity:'1'},4000);
    },3000);
});

const video = document.querySelector('#video1');

video.addEventListener('ended', (event) => {
    $('#video1').fadeOut(1000);
});