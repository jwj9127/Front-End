import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function MusicPlayer(props) {
    const { playing, setPlaying, playlist } = props; // playlist prop 추가
    const playerRef = useRef(null); // ReactPlayer의 ref 속성
    const [played, setPlayed] = useState(0); // 현재 재생 시간
    const [duration, setDuration] = useState(0); // 총 재생 시간
    const [ready, setReady] = useState(false); // 준비 상태
    const [curr, setCurr] = useState(playlist); // 현재 재생할 URL

    useEffect(() => {
        setCurr(playlist); // playlist prop이 변경될 때마다 현재 URL을 업데이트
    }, [playlist]);

    const onEnded = () => {
        setPlaying(false); // 재생 종료 시 일시 정지 상태로 변경
    };

    return (
        <>
            <ReactPlayer
                url={curr} // 재생할 URL
                className='player' // 클래스 이름 지정
                playing={playing} // 재생 상태
                controls={true} // 유튜브 재생 컨트롤바 노출 여부
                onEnded={onEnded} // 영상 종료 시 호출
                onReady={() => setReady(true)} // 영상 준비 완료 시
                onDuration={duration => setDuration(duration)} // 총 재생 시간 업데이트
                onProgress={state => setPlayed(state.played)} // 현재 재생 시간 업데이트
            />
        </>
    );
}
