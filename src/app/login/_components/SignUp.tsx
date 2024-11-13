"use client";

import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import {
    setUserIdValue,
    setUserPwValue,
    setUserNameValue
} from '../../../../store/sign/signUp';
import toggleIsSign from '../../../../store/sign/signSwitch';
import styles from '../../../../styles/login/signUp.module.css';

export default function SignUp() {

    const dispatch = useDispatch();
    const { userIdValue, userPwValue, userNameValue } = useSelector(
        (state: RootState) => state.signUp
    );
    const isSign = useSelector(
        (state: RootState) => state.signSwitch
    );

    const [idFocused, setIdFocused] = useState(false);
    const [pwFocused, setPwFocused] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);

    const userIdRef = useRef<HTMLInputElement | null>(null);
    const userPwRef = useRef<HTMLInputElement | null>(null);
    const userNameRef = useRef<HTMLInputElement | null>(null);

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setUserIdValue(e.target.value));
    const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setUserPwValue(e.target.value));
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setUserNameValue(e.target.value));

    if (isSign.isSign === false) return null;

    return React.createElement(
        'div',
        { className: `${styles.main_div}` },
        React.createElement(
            'div',
            { className: `${styles.title_div}` },
            React.createElement('p', null, '회원가입')
        ),
        React.createElement('p', { className: `${styles.userId_check}` }, '아이디 중복 확인'),
        React.createElement(
            'div',
            { className: `${styles.userId_div}` },
            React.createElement(
                'label',
                {
                    onClick: () => userIdRef.current?.focus(),
                    className: idFocused || userIdValue !== '' ? `${styles.focusedLabel_user_id}` : `${styles.normalLabel_user_id}`,
                },
                '아이디'
            ),
            React.createElement('input', {
                type: 'text',
                name: 'user_id',
                id: 'user_id',
                onBlur: () => setIdFocused(false),
                onFocus: () => setIdFocused(true),
                className: idFocused || userIdValue !== '' ? `${styles.focusedInput_user_id}` : `${styles.normalInput_user_id}`,
                ref: userIdRef,
                value: userIdValue,
                onChange: handleIdChange,
            })
        ),
        React.createElement(
            'div',
            { className: `${styles.userPw_div}` },
            React.createElement(
                'label',
                {
                    onClick: () => userPwRef.current?.focus(),
                    className: pwFocused || userPwValue !== '' ? `${styles.focusedLabel_user_pw}` : `${styles.normalLabel_user_pw}`,
                },
                '비밀번호'
            ),
            React.createElement('input', {
                type: 'password',
                name: 'user_pw',
                id: 'user_pw',
                onBlur: () => setPwFocused(false),
                onFocus: () => setPwFocused(true),
                className: pwFocused || userPwValue !== '' ? `${styles.focusedInput_user_pw}` : `${styles.normalInput_user_pw}`,
                ref: userPwRef,
                value: userPwValue,
                onChange: handlePwChange,
            })
        ),
        React.createElement(
            'div',
            { className: `${styles.userName_div}` },
            React.createElement(
                'label',
                {
                    onClick: () => userNameRef.current?.focus(),
                    className: nameFocused || userNameValue !== '' ? `${styles.focusedLabel_user_name}` : `${styles.normalLabel_user_name}`,
                },
                '닉네임'
            ),
            React.createElement('input', {
                type: 'text',
                name: 'user_name',
                id: 'user_name',
                onBlur: () => setNameFocused(false),
                onFocus: () => setNameFocused(true),
                className: nameFocused || userNameValue !== '' ? `${styles.focusedInput_user_name}` : `${styles.normalInput_user_name}`,
                ref: userNameRef,
                value: userNameValue,
                onChange: handleNameChange,
            })
        ),
        React.createElement(
            'button',
            { className: `${styles.signup_button}` },
            '회원가입'
        ),
        React.createElement(
            'div',
            { className: `${styles.signin_div}` },
            React.createElement('p', null, '아이디가 있으신가요?'),
            React.createElement(
                'button',
                {
                    className: `${styles.signin_button}`,
                    onClick: () => dispatch(toggleIsSign()),
                },
                '로그인'
            )
        )
    );
}