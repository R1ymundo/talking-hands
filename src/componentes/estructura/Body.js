import React, { useState } from 'react';
import SearchBar from '../translate/SearchBar';
import Translate from '../translate/Translate';

function Body() {
    const [translatedText, setTranslatedText] = useState('');

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
    
    return (
        <div>
            <Translate/>
            <SearchBar onSearch={handleSearch}/>
        </div>
        
    );  
}

export default Body;