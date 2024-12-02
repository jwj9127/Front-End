import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { backgroundAllAPI, backgroundOwnedAPI } from '../../../../../store/main/backgrounAPI';
import { BackGround } from '../../_interface/ModalInterface';

export const useBackgroundData = (isModalOpen: boolean) => {
    const userId = window.localStorage.getItem('userId');
    const dispatch = useDispatch<AppDispatch>();
    const [backgroundImgs, setBackgroundImgs] = useState<BackGround[]>([]);
    const [userBackgroundImgs, setUserBackgroundImgs] = useState<BackGround[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [allBackgrounds, ownedBackgrounds] = await Promise.all([
                    dispatch(backgroundAllAPI()).unwrap(),
                    dispatch(backgroundOwnedAPI(userId!)).unwrap(),
                ]);
                setBackgroundImgs(allBackgrounds);
                setUserBackgroundImgs(ownedBackgrounds);
            } catch (error) {
                console.error("Error fetching background data:", error);
            }
        };

        fetchData();
    }, [isModalOpen, dispatch]);

    return { backgroundImgs, userBackgroundImgs };
};
