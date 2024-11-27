"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/main/asmr.module.css';
import { ASMRProps, Asmr } from '../_interface/ModalInterface';
import { asmrAllAPI, asmrOwnedAPI } from '../../../../store/main/asmrAPI';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faLock, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';

const ASMR: React.FC<ASMRProps> = ({ playAudio, stopAudio, currentAsmr, isModalOpen, closeModal }) => {

    const dispatch = useDispatch<AppDispatch>();
    // const userId = window.localStorage.getItem('userId');
    const [asmrAudios, setAsmrAudios] = useState<Asmr[]>([]);
    const [userAsmrAudios, setUserAsmrAudios] = useState<Asmr[]>([]);

    useEffect(() => {
        dispatch(asmrAllAPI())
            .unwrap()
            .then((response) => {
                console.log(response);
                setAsmrAudios(response);
            })
            .catch((error) => {
                console.log(error);
            })

        // dispatch(asmrOwnedAPI(userId!))
        //     .unwrap()
        //     .then((response) => {
        //         console.log(response);
        //         setUserAsmrAudios(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }, [])

    const handleAudioPlay = (asmr: Asmr) => {
        // 현재 재생 중인 ASMR과 클릭한 ASMR을 비교
        if (currentAsmr && currentAsmr.id === asmr.id) {
            stopAudio(); // 동일한 ASMR이면 정지
        } else {
            playAudio(asmr.url, asmr); // 다른 ASMR이면 재생
        }
    };

    if (!isModalOpen) return null;

    return React.createElement(
        'div',
        {
            className: styles.main_div,
            onClick: (e: any) => e.stopPropagation()
        },
        React.createElement(FontAwesomeIcon, {
            icon: faX,
            className: `${styles.modal_out}`,
            onClick: closeModal,
        }),
        React.createElement(
            'div',
            { className: `${styles.out_div}` },
            React.createElement(
                'div',
                { className: `${styles.title}` },
                'ASMR'
            ),
            React.createElement(
                'div',
                { className: `${styles.img_div}` },
                asmrAudios.map((asmr: Asmr) => {
                    const isLocked = !userAsmrAudios.some(userAsmr => userAsmr.id === asmr.id);
                    const isActive = currentAsmr && currentAsmr.id === asmr.id;

                    return React.createElement(
                        'div',
                        {
                            key: asmr.id,
                            className: `${styles.img}`,
                            style: {
                                backgroundImage: `url(data:image/jpeg;base64,${asmr})`,
                            },
                            title: isLocked ? asmr.fileName : '',
                            onClick: () => handleAudioPlay(asmr),
                        },
                        isLocked &&
                        React.createElement(FontAwesomeIcon, {
                            icon: isActive ? faStop : faPlay,
                            onClick: (e) => {
                                e.stopPropagation();
                                handleAudioPlay(asmr);
                            },
                        }),
                        !isLocked &&
                        React.createElement(FontAwesomeIcon, {
                            icon: faLock,
                            className: `${styles.lock}`,
                        })
                    );
                })
            )
        )
    );


}

export default ASMR;