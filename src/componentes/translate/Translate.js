import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import playIcon from '../../images/play.png';
import pauseIcon from '../../images/pausa.png';
import stopIcon from '../../images/parar.png';
import fullscreenIcon from '../../images/full_screen.png';
import SearchBar from './SearchBar';
import '../../styles/translate/Translate.css';

function Translate() {

    const [translatedText, setTranslatedText] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleSearch = (searchText) => {
        console.log('Texto de búsqueda:', searchText);
        try {
            if (searchText.trim() === '') {
                throw new Error('El campo de búsqueda está vacío');
            }
            handleTranslation(searchText);
            setVideoUrl(`https://app.dems.ipn.mx/prototipos/files/videos/${searchText}.mp4`); // Reemplaza 'URL_BASE' por la base de la URL de tus videos
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleTranslation = (searchText) => {
        // Aquí podrías realizar la lógica real de traducción
        const translatedTextResult = '¡Hola mundo!';
        setTranslatedText(translatedTextResult);
    };

    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    const handleStop = () => {
        setPlaying(false);
        playerRef.current.seekTo(0);
    };

    const handleFullScreen = () => {
        const player = playerRef.current.getInternalPlayer();
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.mozRequestFullScreen) { /* Firefox */
            player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) { /* IE/Edge */
            player.msRequestFullscreen();
        }
    };

    const handleVideoEnded = () => {
        setPlaying(false); // Cambia el estado de reproducción a falso cuando el video haya terminado
        playerRef.current.seekTo(0); // Reinicia el video al principio
    };
    
    return (
        <div className='video-container'>

            <div className='search-container'>
                <SearchBar onSearch={handleSearch}/>
            </div>

            <div className='reproductor-container'>
                <div className='reproductor'>
                    <ReactPlayer
                        ref={playerRef}
                        url={videoUrl}
                        width='100%'
                        height='100%'
                        playing={playing}
                        playbackRate={0.5}
                        className='react-player'
                        onEnded={handleVideoEnded}
                    />
                </div>

                <div className='container-botons'>
                    <div className='boton-container'>
                        <button className="stop-button" onClick={() => { setPlaying(false); handleStop(); }}><img src={stopIcon} alt='Stop' /></button>
                        <button className="play-button" onClick={() => setPlaying(prevPlaying => !prevPlaying)}><img src={playing ? pauseIcon : playIcon} alt={playing ? 'Pause' : 'Play'} /></button>
                        <button className="fullscreen-button" onClick={handleFullScreen}><img src={fullscreenIcon} alt='Fullscreen' /></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Translate;
