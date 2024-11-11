"use client";

import React, { useRef, useState } from 'react';
import styles from '../../../../styles/login/signIn.module.css';

export default function SignIn() {

    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    const [idFocused, setIdFocused] = useState(false);
    const [pwFocused, setPwFocused] = useState(false);

    const idInputRef = useRef<HTMLInputElement | null>(null);
    const pwInputRef = useRef<HTMLInputElement | null>(null);

    const handleIdLabelClick = () => {
        if (idInputRef.current) {
            idInputRef.current.focus();
        }
    };

    const handlePwLabelClick = () => {
        if (pwInputRef.current) {
            pwInputRef.current.focus();
        }
    };

    return (
        <>
            <div className={styles.main_div}>
                <div className={styles.title_div}>
                    <p>
                        로그인
                    </p>
                </div>
                <div className={styles.userId_div}>
                    <label
                        onClick={handleIdLabelClick}
                        className={idFocused || idValue !== '' ? styles.focusedLabel_id : styles.normalLabel_id}
                    >
                        아이디
                    </label>
                    <input
                        type='text'
                        name='id'
                        id='id'
                        onBlur={() => setIdFocused(false)}
                        onFocus={() => setIdFocused(true)}
                        className={idFocused || idValue !== '' ? styles.focusedInput_id : styles.normalInput_id}
                        ref={idInputRef}
                        onChange={(e) => setIdValue(e.target.value)}
                    />
                </div>
                <div className={styles.userPw_div}>
                    <label
                        onClick={handlePwLabelClick}
                        className={pwFocused || pwValue !== '' ? styles.focusedLabel_pw : styles.normalLabel_pw}
                    >
                        비밀번호
                    </label>
                    <input
                        type='password'
                        name='pw'
                        id='pw'
                        onBlur={() => setPwFocused(false)}
                        onFocus={() => setPwFocused(true)}
                        className={pwFocused || pwValue !== '' ? styles.focusedInput_pw : styles.normalInput_pw}
                        ref={pwInputRef}
                        onChange={(e) => setPwValue(e.target.value)}
                    />
                </div>
                <button className={styles.signin_button} >로그인</button>
                <div className={styles.signup_div}>
                    <p>
                        아이디가 없으신가요?
                    </p>
                    <button className={styles.signup_button} >회원 가입</button>
                </div>
            </div>
        </>
    )

}