import React, { useState } from 'react';
import { handleMicrophoneClick, stopRecording } from '../../utils/microphoneUtils'; 
import microfono from '../../images/microfono.png';
import parar from '../../images/parar.png';
import flecha from '../../images/traducir.png';
import '../../styles/translate/SearchBar.css'; 

function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText);
    };

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleMicrophoneButtonClick = () => {
        if (!isRecording) {
            setIsRecording(true);
            handleMicrophoneClick(setSearchText);
        } else {
            setIsRecording(false);
            stopRecording();
        }
    };

    return (
        <div className="search-container">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    className={`search-input ${searchText ? 'active' : ''}`}
                    type="text"
                    placeholder="Ingresa el texto a traducir"
                    maxLength={50}
                    value={searchText}
                    onChange={handleChange}
                />
                <button className="search-button" type="submit" onClick={handleSubmit}>
                    <img src={flecha} alt='Traducir'/> 
                </button>
                
            </form>
            <br></br>
            <button className="search-microphone-button" onClick={handleMicrophoneButtonClick}>
                <img src={isRecording ? parar : microfono} alt={isRecording ? 'Detener' : 'Grabar'} />
            </button>
        </div>
    );
}

export default SearchBar;
