// Body.js

import React, { useState } from 'react';
import SearchBar from '../translate/SearchBar_prueba';
import TranslatorResults from '../translate/TranslationResults';
import { handleMicrophoneClick, stopRecording } from '../../utils/microphoneUtils';
import '../../styles/estructura/body.css';

function Body_prueba() {
  const [translatedText, setTranslatedText] = useState('');
  const [isRecording, setIsRecording] = useState(false); // Agrega estado para la grabación

  const handleSearch = (searchText) => {
    console.log('Texto de búsqueda:', searchText);
    // Aquí podrías realizar la lógica para la traducción
    if (searchText.trim() === '') {
      setTranslatedText('');
    } else {
      handleTranslation(searchText);
    }
  };

  const handleTranslation = (searchText) => {
    // Aquí podrías realizar la lógica real de traducción
    const translatedTextResult = '¡Hola mundo!';
    setTranslatedText(translatedTextResult);
  };

  const handleMicrophoneButtonClick = () => {
    if (!isRecording) {
      handleMicrophoneClick(setTranslatedText); // Pasa setTranslatedText como argumento
    } else {
      stopRecording(); // Lógica para detener la grabación
    }
    setIsRecording(!isRecording); // Cambiar el estado de la grabación
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <TranslatorResults translatedText={translatedText} />
      <button onClick={handleMicrophoneButtonClick}>
        {isRecording ? 'Detener grabación' : 'Iniciar grabación'}
      </button>
    </div>
  );
}

export default Body_prueba;
