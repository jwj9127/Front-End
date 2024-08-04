import { useState } from 'react';
import Modal from 'react-modal';
import './WhiteNoise.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function WhiteNoise() {

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

    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} style={chatStyles}>
                <FontAwesomeIcon icon={faX} className='main_page_change_modal_out' onClick={closeModal} />
                <div className='main_page_back_img_big_div'>
                    <div className='main_page_back_img_big_div_title'>백색 소음</div>
                    <div className='main_page_back_img_big_div_main'>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                        <div className='main_page_back_img_big_div_main_back_img'></div>
                    </div>
                </div>
            </Modal>
        </>
    );
}