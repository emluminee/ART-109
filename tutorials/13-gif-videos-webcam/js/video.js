// console.log("Video script loaded");

const hoverVideo = document.querySelectorAll('.hover-video');
const clickVideo = document.querySelectorAll('.click-video');

hoverVideo.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    })
})
hoverVideo.forEach(video => {
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    })
})

clickVideo.forEach(video => {
    video.addEventListener('click', () => {
        video.play();
    })
})