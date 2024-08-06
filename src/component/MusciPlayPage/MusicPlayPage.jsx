import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, } from "@fortawesome/free-solid-svg-icons";
import './MusicPlayPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

export default function MusicPlayPage() {

    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');
    const [lofi, setLofi] = useState([]);
    const [piano, setPiano] = useState([]);
    const [isLofi, setIsLofi] = useState(true);
    const [currentUrl, setCurrentUrl] = useState('');
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/youtube/lofiTop20',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setLofi(result.data);
        })
    }, [])

    const outPlayList = () => {
        navigate('/mainpage')
    }

    const showLoFi = () => {
        axios({
            method: 'get',
            url: '/youtube/lofiTop20',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setLofi(result.data);
            setIsLofi(true);
        })
    }

    const showPiano = () => {
        axios({
            method: 'get',
            url: '/youtube/pianoTop20',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setPiano(result.data);
            setIsLofi(false);
        })
    }

    const handleTitleClick = (url) => {
        setCurrentUrl(url);
        setPlaying(true);
    };

    return (
        <>
            {/* 배경화면 */}
            <div className="backgroundImage"></div >
            <div className='music_page_lofi_select' onClick={showLoFi}>Lo-fi <br /> TOP 20</div>
            <div className='music_page_piano_select' onClick={showPiano}>Piano <br /> TOP 20</div>
            <div className='music_page_top_20_select_div'>
                <div className='music_page_top_20_select_div_top'>
                    <div className='music_page_top_20_select_div_title'>Top 20 Music List</div>
                    <FontAwesomeIcon icon={faX} className='music_page_top_20_select_div_back' onClick={() => { outPlayList() }} />
                </div>
                <div className='music_page_top_20_select_div_main'>
                    <div className='music_page_top_20_select_div_main_pick_head'>
                        <div className='music_page_top_20_select_div_main_pick_select_div'>
                            <p className='music_page_top_20_select_div_main_pick_name_top'>로파이 제목</p>
                            <p className='music_page_top_20_select_div_main_pick_hits_top'>조회수</p>
                        </div>
                    </div>
                    <div className='music_page_top_20_select_div_main_pick_body'>
                        {(isLofi ? lofi : piano).map((item, index) => (
                            <div key={index} className='music_page_top_20_select_div_main_pick_select_div_content' onClick={() => handleTitleClick(item.videoUrl)}>
                                <p className='music_page_top_20_select_div_main_pick_name'>{item.title}</p>
                                <p className='music_page_top_20_select_div_main_pick_hits'>{item.viewCount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {currentUrl && (
                <MusicPlayer
                    playing={playing}
                    setPlaying={setPlaying}
                    playlist={currentUrl} // URL을 props로 전달
                />
            )}
        </>
    );
}