//Video
const video = document.getElementById('video');
const sound = document.querySelector('.sound');

sound.onclick = () => {
    sound.classList.toggle('sound_unmuted');
    video.muted = !video.muted;
}