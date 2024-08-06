import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import './Bgm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default function Bgm({ playBgm }) {
    const chatStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "300px",
            height: "350px",
            zIndex: 1,
            position: "fixed",
            top: "60%",
            left: "13%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            backgroundColor: "#29293E",
            border: "none",
            overflow: "auto",
            padding: 0
        },
    };

    const token = window.localStorage.getItem('token');
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const calmbgm = () => {
        axios({
            method: 'get',
            url: `/bgm/mood/차분`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            console.log(result.data.data)
            playBgm(result.data.data);
        });
    };

    const excitingbgm = () => {
        axios({
            method: 'get',
            url: `/bgm/mood/발랄`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            playBgm(result.data.data);
        });
    };

    return (
        <>
            <Modal isOpen={isModalOpen} style={chatStyles}>
                <FontAwesomeIcon icon={faX} className='main_page_change_modal_out' onClick={closeModal} />
                <div className='main_page_bgm_big_div'>
                    <p className='main_page_bgm_p' onClick={calmbgm}>잔잔한 bgm</p>
                    <p className='main_page_bgm_p' onClick={excitingbgm}>신나는 bgm</p>
                </div>
            </Modal>
        </>
    );
}
