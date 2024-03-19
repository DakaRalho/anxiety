let audio = new Audio('nome_do_arquivo.mp3'); // Substitua 'nome_do_arquivo.mp3' pelo nome do seu arquivo de áudio

self.addEventListener('message', function(e) {
    if (e.data === 'start') {
        startAudio();
    } else if (e.data === 'stop') {
        stopAudio();
    }
});

function startAudio() {
    audio.loop = true; // Garante que o áudio seja reproduzido repetidamente
    audio.play();
}

function stopAudio() {
    audio.pause();
}
