import React from 'react';
import '../../styles/translate/TranslatorResults.css'; 

function TranslatorResults({ translatedText }) {
    return (
        <div className="translator-results"> {/* Aplica la clase del contenedor */}
            <p>{translatedText}</p>
        </div>
    );
}

export default TranslatorResults;
