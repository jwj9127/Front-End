import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './BackImage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function BackImage() {

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
    const [backgroundImages, setBackgroundImages] = useState([]);
    const [userImages, setUserImages] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/background-get',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            setBackgroundImages(result.data.data);
        })
        axios({
            method: 'get',
            url: `/user/background/${user_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            console.log(result.data)
            setUserImages(result.data.data);
        })
        axios({
            method: 'post',
            url: `/refresh-access/${user_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((result) => {
            if (result.status === 200) {
                console.log('배경 잠금해제')
            }
        })
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveBackground = (image_id) => {
        axios({
            method: 'post',
            url: '/user/set-background',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                userId: user_id,
                backgroundId: image_id
            }
        }).then((result) => {
            if (result.status === 200) {
                Swal.fire({
                    title: "배경화면 설정 완료!"
                }).then(() => {
                    window.location.reload();
                });
            }
        })
    }

    return (
        <>
            <Modal isOpen={isModalOpen} style={chatStyles}>
                <FontAwesomeIcon icon={faX} className='main_page_change_modal_out' onClick={closeModal} />
                <div className='main_page_back_img_big_div'>
                    <div className='main_page_back_img_big_div_title'>배경 이미지</div>
                    <div className='main_page_back_img_big_div_main'>
                        {backgroundImages.map((image) => {
                            const isLocked = !userImages.includes(image.id);
                            return (
                                <div
                                    key={image.id}
                                    className='main_page_back_img_big_div_main_back_img'
                                    style={{ backgroundImage: `url(data:image/jpeg;base64,${image.imageBase64})` }}
                                    title={isLocked ? '' : image.name}
                                    onClick={() => {
                                        saveBackground(image.id)
                                    }}
                                >
                                    {isLocked && <FontAwesomeIcon icon={faLock} className='main_page_back_img_lock' />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </>
    );
}
