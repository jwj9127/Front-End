import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { asmrAllAPI, asmrOwnedAPI } from '../../../../../store/main/asmrAPI';
import { Asmr } from '../../_interface/ModalInterface';

export const useBackgroundData = () => {
    const userId = window.localStorage.getItem('userId');
    const dispatch = useDispatch<AppDispatch>();
    const [asmrAudios, setAsmrAudios] = useState<Asmr[]>([]);
    const [userAsmrAudios, setUserAsmrAudios] = useState<Asmr[]>([]);

    useEffect(() => {
        dispatch(asmrAllAPI())
            .unwrap()
            .then((response) => setAsmrAudios(response))
            .catch(console.error);

        dispatch(asmrOwnedAPI(userId!))
            .unwrap()
            .then((response) => setUserAsmrAudios(response))
            .catch(console.error);
    }, [dispatch]);

    return { asmrAudios, userAsmrAudios };
};
