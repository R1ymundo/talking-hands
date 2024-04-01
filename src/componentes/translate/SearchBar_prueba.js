import React, { useState } from 'react';
import { handleMicrophoneClick, stopRecording } from '../../utils/microphoneUtils'; 
import '../../styles/translate/SearchBar.css'; 

function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');
    const [isRecording, setIsRecording] = useState(false); // Estado para controlar si se está grabando o no

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText);
    };

    const handleMicrophoneButtonClick = () => {
        if (!isRecording) {
            handleMicrophoneClick(); // Lógica para iniciar la grabación
        } else {
            stopRecording(); // Lógica para detener la grabación
        }
        setIsRecording(!isRecording); // Cambiar el estado de la grabación
    };

    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    className={`search-input ${searchText ? 'active' : ''}`}
                    type="text"
                    placeholder="Ingresa el texto a traducir..."
                    maxLength={50} 
                    value={searchText}
                    onChange={handleChange}
                />
                <button className="search-button" type="submit" onClick={handleSubmit}>Traducir</button>
            </form>
            <button className={`microphone-button ${isRecording ? 'recording' : ''}`} onClick={handleMicrophoneButtonClick}>
                {isRecording ? '🛑' : '🎤'} 
            </button>
        </div>
    );
}

export default SearchBar;
