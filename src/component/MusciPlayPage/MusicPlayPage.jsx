import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import './MusicPlayPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MusicPlayPage(props) {

    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');
    const { playing, setPlaying, curr } = props;
    const [lofi, setLofi] = useState([]);
    const [piano, setPiano] = useState([]);

    const handlePlayBtn = () => {
        setPlaying(!playing);
    };

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
        axios({
            method: 'get',
            url: '/youtube/pianoTop20',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setPiano(result.data);
        })
    })

    const outPlayList = () => {
        navigate('/mainpage')
    }

    return (
        <>
            {/* 배경화면 */}
            <div className="backgroundImage"></div >
            <div className='music_page_lofi_select'>Lo-fi <br /> TOP 20</div>
            <div className='music_page_piano_select'>Piano <br /> TOP 20</div>
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
                        <div className='music_page_top_20_select_div_main_pick_select_div_content'>
                            <p className='music_page_top_20_select_div_main_pick_name'>로파이 제목</p>
                            <p className='music_page_top_20_select_div_main_pick_hits'>조회수</p>
                        </div>
                    </div>
                </div>
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