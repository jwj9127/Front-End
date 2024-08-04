import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import './MusicPlayerBar.css'

export default function MusicPlayBar(props) {
    const { playing, setPlaying, curr } = props;

    const handlePlayBtn = () => {
        setPlaying(!playing);
    };

    return (
        <>
            <div onClick={handlePlayBtn} className='music_palyer_bar_backgrond'>
                {playing ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
            <ReactPlayer
                url={curr}
                playing={playing}
                style={{ display: 'none' }}
            />
        </>
    );
}
