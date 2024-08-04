import React from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import './MusicPlayPage.css';

export default function MusicPlayPage(props) {
    const { playing, setPlaying, curr } = props;

    const handlePlayBtn = () => {
        setPlaying(!playing);
    };

    return (
        <>
            {/* 배경화면 */}
            <div className="backgroundImage"></div >
            <div className='music_page_lofi_select'>Lo-fi <br /> TOP 20</div>
            <div className='music_page_piano_select'>Piano <br /> TOP 20</div>
            <div>
                <div>
                    <div>Top 20 Music List</div>
                </div>
                <FontAwesomeIcon icon={faX} className='' />
            </div>
            {/* <div onClick={handlePlayBtn} className='music_palyer_bar_backgrond'>
                {playing ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
            <ReactPlayer
                url={curr}
                playing={playing}
                style={{ display: 'none' }}
            /> */}
        </>
    );
}
