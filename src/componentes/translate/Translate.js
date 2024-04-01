import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import playIcon from '../../images/play.png';
import pauseIcon from '../../images/pausa.png';
import stopIcon from '../../images/parar.png';
import fullscreenIcon from '../../images/full_screen.png';
import '../../styles/translate/Translate.css';

function Translate() {

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
        <div>
            <ReactPlayer
                ref={playerRef}
                url={require('../../videos/a.mp4')}
                width='100%'
                height='100%'
                playing={playing}
                playbackRate={0.5} // Cambiar a la velocidad deseada (0.5 reproduce a la mitad de la velocidad normal)
                className='react-player'
                onEnded={handleVideoEnded} // Manejar el evento de finalización del video
            />
        </div>

        <div className='boton-container'>
            <button className="stop-button" onClick={() => { setPlaying(false); handleStop(); }}><img src={stopIcon} alt='Stop' /></button>
            <button className="play-button" onClick={() => setPlaying(prevPlaying => !prevPlaying)}><img src={playing ? pauseIcon : playIcon} alt={playing ? 'Pause' : 'Play'} /></button>
            <button className="fullscreen-button" onClick={handleFullScreen}><img src={fullscreenIcon} alt='Fullscreen' /></button>
        </div>
    </div>
    );
}

export default Translate;
