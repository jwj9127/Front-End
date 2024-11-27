"use client";

import React, { useEffect, useState } from 'react';
import { BackGround, ModalProps } from '../_interface/ModalInterface';
import styles from '../../../../styles/main/background.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { backgroundAllAPI, backgroundOwnedAPI, backgroundSetCurrentAPI } from '../../../../store/main/backgrounAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Background: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const dispatch = useDispatch<AppDispatch>();
    // const userId = window.localStorage.getItem('userId');
    const [backgroundImgs, setBackgroundImgs] = useState<BackGround[]>([]);
    const [userBackgroundImgs, setUserBackgroundImgs] = useState<BackGround[]>([]);

    useEffect(() => {
        dispatch(backgroundAllAPI())
            .unwrap()
            .then((response) => {
                console.log(response);
                setBackgroundImgs(response);
            })
            .catch((error) => {
                console.log(error);
            })

        // dispatch(backgroundOwnedAPI(userId!))
        //     .unwrap()
        //     .then((response) => {
        //         console.log(response);
        //         setUserBackgroundImgs(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }, [])

    const saveBackground = (background_id: string) => {
        dispatch(backgroundSetCurrentAPI(background_id))
            .unwrap()
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    };

    if (!isModalOpen) return null;

    return (
        <>
            <div
                className={styles.main_div}
                onClick={(e: any) => e.stopPropagation()}
            >
                <FontAwesomeIcon
                    icon={faX}
                    className={styles.modal_out}
                    onClick={closeModal}
                ></FontAwesomeIcon>
                <div className={styles.out_div}>
                    <div className={styles.title}>배경화면</div>
                    <div className={styles.img_div}>
                        {
                            backgroundImgs.map((background: BackGround) => {
                                const isLocked = !userBackgroundImgs.some(userBackgroundImg => userBackgroundImg.id === background.id);

                                return (
                                    <>
                                        <div
                                            key={background.id}
                                            className={styles.img}
                                            title={isLocked ? '' : background.fileName}
                                            onClick={() => { saveBackground(background.id) }}
                                        ></div >
                                    </>
                                )
                            })}
                    </div>
                </div >
            </div>
        </>
    )

}

export default Background;