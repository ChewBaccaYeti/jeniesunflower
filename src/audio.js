const music = document.getElementById("background-music");

function playMusic() {
    music.play().catch(function (error) {
        console.error("Ошибка при воспроизведении музыки: ", error);
    });
}

window.onload = playMusic;