import React, { useState, useRef } from 'react';
import './Sign.css';

export default function Sign() {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);

    const handleLabelClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // input 요소에 포커스를 이동시킵니다
        }
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };
    return (
        <>
            <div className='sign_back_div'></div>
            <div className='sign_main_div'>
                <div className='sign_main_div_login'>
                    <p>
                        로그인
                    </p>
                </div>
                <div className='sign_main_div_userId'>
                    <label htmlFor='id' onClick={handleLabelClick} onBlur={handleBlur} className={focused ? 'focusedLabel_id' : 'normalLabel_id'}>아이디</label>
                    <input type='text' name='id' onFocus={handleFocus} onBlur={handleBlur} className={focused ? 'focusedInput_id' : 'normalInput_id'} ref={inputRef} />
                </div>
                <div className='sign_main_div_userPw'>
                    <label htmlFor='id' onClick={handleLabelClick} onBlur={handleBlur} className={focused ? 'focusedLabel_pw' : 'normalLabel_pw'}>비밀번호</label>
                    <input type='text' name='id' onFocus={handleFocus} onBlur={handleBlur} className={focused ? 'focusedInput_pw' : 'normalInput_pw'} ref={inputRef} />
                </div>
                <div className='sign_main_div_login_button'>로그인</div>
                <div></div>
            </div>
        </>
    );
}