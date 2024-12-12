import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../../../styles/main/mypage.module.css';
import { ModalProps } from '../../_interface/MainInterface';
import ModifyUser from './ModifyUser';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '../../../../../store/store';
import { deleteUserAPI } from '../../../../../store/main/userAPI';
import Swal from 'sweetalert2';

const Mypage: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const userId = window.localStorage.getItem('userId');
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [isModifyUser, setIsModifyUser] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const modifyRef = useRef<HTMLDivElement>(null);

    const toggleModifyUser = () => {
        if (isModifyUser) {
            setIsModifyUser(false);
            setTimeout(() => setIsVisible(false), 500);
        } else {
            setIsVisible(true);
            setTimeout(() => setIsModifyUser(true), 10);
        }
    };

    useEffect(() => {
        if (modifyRef.current) {
            if (isModifyUser) {
                modifyRef.current.style.maxHeight = `${modifyRef.current.scrollHeight}px`;
                modifyRef.current.style.opacity = '1';
            } else {
                modifyRef.current.style.maxHeight = '0';
                modifyRef.current.style.opacity = '0';
            }
        }
    }, [isModifyUser]);

    if (!isModalOpen) return null;

    const deleteUser = (e: any) => {
        e.preventDefault();
        dispatch(deleteUserAPI(userId!))
            .unwrap()
            .then(() => {
                Swal.fire({
                    title: "회원 탈퇴가 진행되었습니다."
                })
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('userId');
                router.push('/login');
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "오류가 발생하였습니다."
                    })
                }
            });
    }

    const logout = (e: any) => {
        e.preventDefault();
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        router.push('/login');
    }

    return (
        <div className={styles.main_div} onClick={(e) => e.stopPropagation()}>
            <div>
                <p className={styles.put_btn} onClick={toggleModifyUser}>회원 정보 수정</p>
            </div>
            {isVisible && (
                <div
                    ref={modifyRef}
                    className={styles.modify_wrapper}
                >
                    <ModifyUser />
                </div>
            )}
            <div>
                <p className={styles.delete_btn} onClick={deleteUser}>회원 탈퇴</p>
            </div>
            <div>
                <p className={styles.logout_btn} onClick={logout}>로그아웃</p>
            </div>
        </div >
    );
};

export default Mypage;