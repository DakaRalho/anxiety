let audio = new Audio('Kim Dracula - Make Me Famous (Official Audio)(M4A_128K).m4a'); // Substitua 'nome_do_arquivo.mp3' pelo nome do seu arquivo de áudio

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
