const wavesurfer = require('wavesurfer.js')

document.addEventListener('DOMContentLoaded', function () {
    const waveSurfer = wavesurfer.create({
        container: '#waveform',
        waveColor: '#00f376',
        progressColor: '#F8F005'
    });

    waveSurfer.load('https://chewbaccayeti.github.io/jeniesunflower/audio/pislya_dowu_hochew.mp3');

    waveSurfer.on('ready', function () {
        console.log('Аудіофайл завантажен та готов до відтворення');
        document.getElementById('duration').textContent = formatTime(waveSurfer.getDuration());
        waveSurfer.play();
    });

    waveSurfer.on('audioprocess', function () {
        document.getElementById('current-time').textContent = formatTime(waveSurfer.getCurrentTime());
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    document.getElementById('playPause').addEventListener('click', function () {
        waveSurfer.playPause();
    });

    waveSurfer.on('play', function () {
        console.log('Відтворення');
    });
    waveSurfer.on('pause', function () {
        console.log('Пауза');
    });
});
