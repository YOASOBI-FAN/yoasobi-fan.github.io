document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('click', musicPlay);
}