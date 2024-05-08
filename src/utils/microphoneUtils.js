// microphoneaUtils.js

let recognition;

export function handleMicrophoneClick(setSearchText) {
    if (!('webkitSpeechRecognition' in window)) {
        console.log('El navegador no admite la Web Speech API');
        return;
    }

    recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es'; // Establece el idioma de reconocimiento

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        console.log('Transcripción:', result);
        setSearchText(result); // Actualiza el estado del componente Body con la transcripción
    };

    recognition.onerror = function(event) {
        console.error('Error en la transcripción:', event.error);
    };

    recognition.onend = function() {
        console.log('Fin de la transcripción');
    };

    recognition.start();
}

export function stopRecording() {
    if (recognition) {
        recognition.stop();
        console.log('Grabación detenida.');
    } else {
        console.log('La grabación ya estaba detenida.');
    }
}
