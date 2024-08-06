import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function MusicPlayer(props) {
    const { playlist, playing, setPlaying } = props; // 추가된 prop

    useEffect(() => {
        // playlist prop이 변경될 때마다 재생 상태를 업데이트
        setPlaying(true);
    }, [playlist, setPlaying]);

    const togglePlayer = () => {
        if (playing) {
            setPlaying(false); // 재생 상태를 중지
        } else {
            setPlaying(true); // 재생 상태를 시작
        }
    };

    return (
        <>
            {playing && (
                <ReactPlayer
                    url={playlist} // 재생할 URL
                    className='player' // 클래스 이름 지정
                    playing={playing} // 재생 상태
                    controls={true} // 유튜브 재생 컨트롤바 노출 여부
                    width={1070} // width 설정
                    height={610} // height 설정
                />
            )}
            <button onClick={togglePlayer} className='music_player_button'>
                {playing ? '영상 끄기' : ''}
            </button>
        </>
    );
}
