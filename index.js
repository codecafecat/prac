const video = document.querySelector('video');

video.addEventListener('ended', (event) => {
    $('video').fadeOut(1000);
});