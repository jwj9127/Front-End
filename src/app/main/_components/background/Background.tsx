"use client";

import React, { useEffect, useState } from 'react';
import { BackGround, ModalProps } from '../../_interface/ModalInterface';
import styles from '../../../../styles/main/background.module.css';
import Headers from './Header';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { backgroundAllAPI, backgroundOwnedAPI, backgroundSetCurrentAPI } from '../../../../../store/main/backgrounAPI';
import BackgroundImageItem from './backgroundItem';
import { useBackgroundData } from './useBackgroundData';

const Background: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { backgroundImgs, userBackgroundImgs } = useBackgroundData();

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
                <Headers title="배경화면" onClick={closeModal} />
                <div className={styles.out_div}>
                    <div className={styles.img_div}>
                        {
                            backgroundImgs.map((background: BackGround) => {
                                const isLocked = !userBackgroundImgs.some(userBackgroundImg => userBackgroundImg.id === background.id);
                                return (
                                    <BackgroundImageItem
                                        key={background.id}
                                        background={background}
                                        isLocked={isLocked}
                                        onSave={saveBackground}
                                    />
                                )
                            })}
                    </div>
                </div >
            </div>
        </>
    )

}

export default Background;