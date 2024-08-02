import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import "./MainPage.css";
import { Link } from "react-router-dom";
import WhiteNoise from '../../component/WhiteNoise/WhiteNoise.jsx'
import Friend from '../../component/Friend/Friend.jsx'
import Calendar from '../../component/Calendar/Calendar.jsx'
import Todolist from '../../component/Todolist/Todolist.jsx'
import BackImage from '../../component/BackImage/BackImage.jsx'
import MusicPlayer from "../../component/MusicPlayer/MusicPlayer.jsx";
import MusicPlayBar from "../../component/MusciPlayerBar/MusicPlayerBar.jsx";
export default function MainPage() {
    const [whiteNoiseOpen, setWhiteNoiseOpen] = useState(false);
    const [friendOpen, setFriendOpen] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [todolistOpen, setTodolistOpen] = useState(false);
    const [backImageOpen, setBackImageOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [curr, setCurr] = useState('https://youtu.be/sqgxcCjD04s?si=ePXJiYzUtjTZ7g_e');

    const whiteNoiseModal = () => {
        setWhiteNoiseOpen(!whiteNoiseOpen);
        setFriendOpen(false);
        setCalendarOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const friendModal = () => {
        setFriendOpen(!friendOpen);
        setWhiteNoiseOpen(false);
        setCalendarOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const calendarModal = () => {
        setCalendarOpen(!calendarOpen);
        setWhiteNoiseOpen(false);
        setFriendOpen(false);
        setTodolistOpen(false);
        setBackImageOpen(false);
    };
    const todolistModal = () => {
        setTodolistOpen(!todolistOpen);
        setWhiteNoiseOpen(false);
        setFriendOpen(false);
        setCalendarOpen(false);
        setBackImageOpen(false);
    };
    const backImageModal = () => {
        setBackImageOpen(!backImageOpen);
        setWhiteNoiseOpen(false);
        setFriendOpen(false);
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
            <div className="my_page_bar">
                <Link to={""} className="my_page_nav"></Link>
            </div>

            {/* 시계 */}
            <div className="clock">
                <Clock
                    className="clock_detail"
                    format={"HH:mm"}
                    ticking={true}
                    timezone={"Asia/Seoul"}
                />
            </div>

            {/* UI 키고 끄기 */}
            <div className="main_page_ui"></div>

            {/* 모달 네비게이션 */}
            <div className="main_page_nav">
                <div className="main_page_nav_noise" onClick={whiteNoiseModal} >
                    {whiteNoiseOpen && <div onClick={stopPropagation}> <WhiteNoise /> </div>}
                </div>
                <div className="main_page_nav_people" onClick={friendModal}>
                    {friendOpen && <div onClick={stopPropagation}> <Friend onClick={stopPropagation} /> </div>}
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
            </div>

            {/* 재생 플레이어 */}
            <div className="main_page_music_bar">
                <MusicPlayer playing={playing} setPlaying={setPlaying} curr={curr} />
                <MusicPlayBar playing={playing} setPlaying={setPlaying} curr={curr} />
            </div>
        </>
    );
};