let context = null;

self.addEventListener('message', function(e) {
    if (e.data === 'start') {
        startAudio();
    } else if (e.data === 'stop') {
        stopAudio();
    }
});

function startAudio() {
    context = new AudioContext();
    let oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 440; // Exemplo de frequência
    oscillator.connect(context.destination);
    oscillator.start(0);
}

function stopAudio() {
    if (context) {
        context.close().then(function() {
            context = null;
        });
    }
}
