import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff, faImage } from "@fortawesome/free-solid-svg-icons";
import WhiteNoise from '../../component/WhiteNoise/WhiteNoise.jsx'
import House from '../../component/House/House.jsx'
import Calendar from '../../component/Calendar/Calendar.jsx'
import Todolist from '../../component/Todolist/Todolist.jsx'
import BackImage from '../../component/BackImage/BackImage.jsx'

export default function MainPage() {
    const [whiteNoiseOpen, setWhiteNoiseOpen] = useState(false);
    const [houseOpen, setHouseOpen] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [todolistOpen, setTodolistOpen] = useState(false);
    const [backImageOpen, setBackImageOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [curr, setCurr] = useState('https://youtu.be/sqgxcCjD04s?si=ePXJiYzUtjTZ7g_e');

    const whiteNoiseModal = () => {
        setWhiteNoiseOpen(!whiteNoiseOpen);
        setHouseOpen(false);
        setCalendarOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const houseModal = () => {
        setHouseOpen(!houseOpen);
        setWhiteNoiseOpen(false);
        setCalendarOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const calendarModal = () => {
        setCalendarOpen(!calendarOpen);
        setWhiteNoiseOpen(false);
        setHouseOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const todolistModal = () => {
        setTodolistOpen(!todolistOpen);
        setWhiteNoiseOpen(false);
        setHouseOpen(false);
        setCalendarOpen(false);
        setBackImageOpen(false);
    };
    const backImageModal = () => {
        setBackImageOpen(!backImageOpen);
        setWhiteNoiseOpen(false);
        setHouseOpen(false);
        setCalendarOpen(false);
        setTodolistOpen(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* 배경화면 이미지 */}
            <div className="backgroundImage"></div>

            {/* 마이페이지 */}
            <div className="my_level_bar"></div>

            {/* bgm 키고 끄기 */}
            <FontAwesomeIcon className="main_page_bgm" icon={faVolumeHigh} size="2x" color="#29293E" />

            {/* 모달 네비게이션 */}
            <div className="main_page_nav">
                <div className="main_page_nav_noise" onClick={whiteNoiseModal} >
                    {whiteNoiseOpen && <div onClick={stopPropagation}> <WhiteNoise /> </div>}
                </div>
                <div className="main_page_nav_calendar" onClick={calendarModal}>
                    {calendarOpen && <div onClick={stopPropagation}> <Calendar onClick={stopPropagation} /> </div>}
                </div>
                <div className="main_page_nav_todolist" onClick={todolistModal}>
                    {todolistOpen && <div onClick={stopPropagation}> <Todolist onClick={stopPropagation} /> </div>}
                </div>
                <div className="main_page_nav_backimg" onClick={backImageModal}>
                    {backImageOpen && <div onClick={stopPropagation}> <BackImage onClick={stopPropagation} /> </div>}
                </div>
                <div className="main_page_nav_house" onClick={houseModal}>
                    {houseOpen && <div onClick={stopPropagation}> <House onClick={stopPropagation} /> </div>}
                </div>
            </div>

            {/* 음악 페이지로 이동 */}
            <Link to={'/musicpage'} className="main_page_music_bar" />
        </>
    );
};