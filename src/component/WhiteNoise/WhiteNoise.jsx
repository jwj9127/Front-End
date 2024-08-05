import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../BackImage/BackImage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faLock, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default function WhiteNoise({ playAudio, stopAudio, currentAsmr }) {
    const chatStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "550px",
            height: "600px",
            zIndex: 1,
            position: "fixed",
            top: "42%",
            left: "50.5%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            backgroundColor: "#29293E",
            border: "none",
            overflow: "auto",
            padding: 0
        },
    };

    const token = window.localStorage.getItem('token');
    const user_id = window.localStorage.getItem('userId');
    const [asmrAudios, setAsmrAudios] = useState([]);
    const [userAsmrAudios, setUserAsmrAudios] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/asmr/files',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setAsmrAudios(result.data);
        });
        axios({
            method: 'get',
            url: `/asmr/user/${user_id}/files`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setUserAsmrAudios(result.data);
        });
        axios({
            method: 'post',
            url: `/refresh-access/${user_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            if (result.status === 200) {
                console.log('asmr 잠금해제');
            }
        });
    }, [token, user_id]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAudioPlay = (asmr) => {
        // 현재 재생 중인 ASMR과 클릭한 ASMR을 비교
        if (currentAsmr && currentAsmr.id === asmr.id) {
            stopAudio(); // 동일한 ASMR이면 정지
        } else {
            playAudio(`data:audio/mp3;base64,${asmr.musicBase64}`, asmr); // 다른 ASMR이면 재생
        }
    };

    return (
        <>
            <Modal isOpen={isModalOpen} style={chatStyles}>
                <FontAwesomeIcon icon={faX} className='main_page_change_modal_out' onClick={closeModal} />
                <div className='main_page_back_img_big_div'>
                    <div className='main_page_back_img_big_div_title'>ASMR</div>
                    <div className='main_page_back_img_big_div_main'>
                        {asmrAudios.map((asmr) => {
                            const isLocked = !userAsmrAudios.includes(asmr.id);
                            const isActive = currentAsmr && currentAsmr.id === asmr.id;
                            return (
                                <div
                                    key={asmr.id}
                                    className='main_page_back_img_big_div_main_back_img'
                                    style={{ backgroundImage: `url(data:image/jpeg;base64,${asmr.imageBase64})` }}
                                    title={isLocked ? asmr.fileName : ''}
                                    onClick={() => isLocked && handleAudioPlay(asmr)} // 클릭 시 handleAudioPlay 호출
                                >
                                    {isLocked && (
                                        <FontAwesomeIcon
                                            icon={isActive ? faStop : faPlay}
                                            className='main_page_back_img_icon'
                                            onClick={(e) => { e.stopPropagation(); handleAudioPlay(asmr); }} // 클릭 시 이벤트 전파 방지
                                        />
                                    )}
                                    {!isLocked && (
                                        <FontAwesomeIcon icon={faLock} className='main_page_back_img_lock' />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </>
    );
}
