"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../../styles/music/music.module.css';
import MusicPlayer from './_components/Player';
import CategoryList from './_components/CategoryList';
import UserPlayList from './_components/UserPlayList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { backgroundGetCurrentAPI } from '../../../store/main/backgrounAPI';
import AiInput from './_components/AiInput';
import Headers from './_components/Header';
import Category from './_components/Category';

export default function Music() {

    const dispatch = useDispatch<AppDispatch>();
    const userId = window.localStorage.getItem('userId');

    const [backgroundImage, setBackgroundImage] = useState(null);
    const [currentUrl, setCurrentUrl] = useState('');
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        dispatch(backgroundGetCurrentAPI(userId!))
            .unwrap()
            .then((response) => {
                setBackgroundImage(response.url);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleTitleClick = (url: any) => {
        setCurrentUrl(url);
        setPlaying(true);
    };

    return (
        <>
            <div
                className={styles.backgroundImage}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className={styles.main_div}>
                <Headers />
                <UserPlayList handleTitleClick={handleTitleClick} />
                <div>
                    <div className={styles.player}>
                        <MusicPlayer
                            playing={playing}
                            setPlaying={setPlaying}
                            playlist={currentUrl}
                        />
                    </div>
                    <AiInput />
                </div>
                <Category />
                <CategoryList />
            </div>
        </>
    )

}