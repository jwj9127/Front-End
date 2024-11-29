import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { backgroundAllAPI, backgroundOwnedAPI } from '../../../../../store/main/backgrounAPI';
import { BackGround } from '../../_interface/ModalInterface';

export const useBackgroundData = () => {
    const userId = window.localStorage.getItem('userId');
    const dispatch = useDispatch<AppDispatch>();
    const [backgroundImgs, setBackgroundImgs] = useState<BackGround[]>([]);
    const [userBackgroundImgs, setUserBackgroundImgs] = useState<BackGround[]>([]);

    useEffect(() => {
        dispatch(backgroundAllAPI())
            .unwrap()
            .then((response) => setBackgroundImgs(response))
            .catch(console.error);

        dispatch(backgroundOwnedAPI(userId!))
            .unwrap()
            .then((response) => setUserBackgroundImgs(response))
            .catch(console.error);
    }, [dispatch]);

    return { backgroundImgs, userBackgroundImgs };
};
