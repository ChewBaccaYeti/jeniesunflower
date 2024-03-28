document.addEventListener('DOMContentLoaded', function () {
    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'lightblue',
        progressColor: 'darkblue'
    });

    wavesurfer.load('../audio/Unprocessed_-_Deadrose_(Vuxo7.com).mp3');

    wavesurfer.on('ready', function () {
        console.log('Аудіофайл завантажен та готов к відтворення');
        wavesurfer.play();
    });

    wavesurfer.on('ready', function () {
        document.getElementById('duration').textContent = formatTime(wavesurfer.getDuration());
        wavesurfer.play();
    });

    wavesurfer.on('audioprocess', function () {
        document.getElementById('current-time').textContent = formatTime(wavesurfer.getCurrentTime());
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    document.getElementById('playPause').addEventListener('click', function () {
        wavesurfer.playPause();
    });

    wavesurfer.on('play', function () {
        console.log('Відтворення');
    });
    wavesurfer.on('pause', function () {
        console.log('Пауза');
    });
});
