import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import './Sign.css';

export default function Sign() {
    const navigate = useNavigate();
    const [isId, setIsId] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    const [userIdValue, setUserIdValue] = useState('');
    const [userPwValue, setUserPwValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [idFocused, setIdFocused] = useState(false);
    const [pwFocused, setPwFocused] = useState(false);
    const [userIdFocused, setUserIdFocused] = useState(false);
    const [userPwFocused, setuserPwFocused] = useState(false);
    const [userNameFocused, setUserNameFocused] = useState(false);
    const idInputRef = useRef(null);
    const pwInputRef = useRef(null);
    const userIdInputRef = useRef(null);
    const userPwInputRef = useRef(null);
    const userNameInputRef = useRef(null);

    const toggleSignup = () => {
        setIsSigningUp(!isSigningUp);
    };

    const idHandleLabelClick = () => {
        if (idInputRef.current) {
            idInputRef.current.focus();
            setIdFocused(true);
        }
    };

    const pwHandleLabelClick = () => {
        if (pwInputRef.current) {
            pwInputRef.current.focus();
            setPwFocused(true);
        }
    };

    const userIdHandleLabelClick = () => {
        if (userIdInputRef.current) {
            userIdInputRef.current.focus();
            setUserIdFocused(true);
        }
    };

    const userPwHandleLabelClick = () => {
        if (userPwInputRef.current) {
            userPwInputRef.current.focus();
            setuserPwFocused(true);
        }
    };

    const userNameHandleLabelClick = () => {
        if (userNameInputRef.current) {
            userNameInputRef.current.focus();
            setUserNameFocused(true);
        }
    };


    const idHandleBlur = () => {
        setIdFocused(false);
    };

    const pwHandleBlur = () => {
        setPwFocused(false);
    };

    const userIdHandleBlur = () => {
        setUserIdFocused(false);
    };

    const userPwHandleBlur = () => {
        setuserPwFocused(false);
    };

    const userNameHandleBlur = () => {
        setUserNameFocused(false);
    };

    // 아이디 중복확인
    const idCheck = e => {
        e.preventDefault();
        let id = document.getElementById("user_id").value.trim();
        if (id.value === '') {
            Swal.fire({
                title: "아이디를 입력해주세요"
            });
            return false;
        }

        try {
            axios({
                method: 'post',
                url: 'localhost:8080/idCheck',
                data: { userId: id },
            }).then(result => {
                if (result.status == 200) {
                    Swal.fire({
                        title: "사용 가능한 아이디입니다."
                    }).then(() => {
                        setIsId(true);
                    });
                }
            }).catch(error => {
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "아이디가 이미 존재합니다."
                    }).then(() => {
                        setIsId(false);
                    });
                } else {
                    Swal.fire({
                        title: "사용 불가능한 아이디입니다."
                    }).then(() => {
                        setIsId(false);
                    });
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    // 로그인
    const onLogin = e => {
        e.preventDefault();

        let check_id = document.getElementById("id").value.trim();
        let check_pw = document.getElementById("pw").value.trim();

        if (check_id === "") {
            Swal.fire({
                title: "아이디를 입력해주세요"
            })
            return false;
        }
        if (check_pw === "") {
            Swal.fire({
                title: "비밀번호를 입력해주세요"
            })
            return false;
        }

        const userLoginDto = {
            username: check_id,
            password: check_pw
        };


        try {
            axios({
                method: 'post',
                url: '/login',
                data: userLoginDto
            }).then(result => {
                if (result.status == 200) {
                    Swal.fire({
                        title: "로그인에 성공했습니다"
                    }).then(() => {
                        navigate('/mainpage');
                    });
                }
            }).catch(error => {
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        title: "아이디 또는 비밀번호가 일치하지 않습니다"
                    }).then(() => {
                        navigate('/');
                    })
                }
            });
        } catch (err) {
            console.log(err)
        }
    }

    // 회원가입
    const onSubmit = e => {
        e.preventDefault();

        let id = document.getElementById("user_id").value.trim();
        let pw = document.getElementById("user_pw").value.trim();
        let name = document.getElementById("user_name").value.trim();

        if (id === "") {
            Swal.fire({
                title: "아이디를 입력해주세요"
            })
            return false;
        } else if (pw === "") {
            Swal.fire({
                title: "비밀번호를 입력해주세요"
            })
            return false;
        } else if (name === "") {
            Swal.fire({
                title: "닉네임을 입력해주세요"
            })
            return false;
        } else if (isId !== true) {
            Swal.fire({
                title: "아이디 중복 확인을 해주세요"
            })
            return false;
        }

        const userDTO = {
            userId: id,
            userPw: pw,
            userName: name
        };

        try {
            axios({
                method: 'post',
                url: '/signup',
                data: userDTO
            }).then(result => {
                if (result.status == 200) {
                    Swal.fire({
                        title: "회원가입에 성공했습니다!"
                    }).then(() => {
                        window.location.reload('/');
                    });
                }
                else {
                    Swal.fire({
                        title: "회원가입에 실패했습니다!"
                    }).then(() => {
                        navigate('/');
                    });
                }
            })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {/* 회원가입 / 로그인 전체 */}
            <div className='sign_body'>
                {/* 배경 박스 */}
                <div className='sign_back_div'></div>
                {/* 로그인 박스 */}
                <div className='sign_main_div'>
                    <div className='sign_main_div_login'>
                        <p>
                            로그인
                        </p>
                    </div>
                    <div className='sign_main_div_userId'>
                        <label htmlFor='id' onClick={idHandleLabelClick} className={idFocused || idValue !== '' ? 'focusedLabel_id' : 'normalLabel_id'}>아이디</label>
                        <input
                            type='text'
                            name='id'
                            id='id'
                            onBlur={idHandleBlur}
                            className={idFocused || idValue !== '' ? 'focusedInput_id' : 'normalInput_id'}
                            ref={idInputRef}
                            onChange={(e) => setIdValue(e.target.value)}
                        />
                    </div>
                    <div className='sign_main_div_userPw'>
                        <label htmlFor='pw' onClick={pwHandleLabelClick} className={pwFocused || pwValue !== '' ? 'focusedLabel_pw' : 'normalLabel_pw'}>비밀번호</label>
                        <input
                            type='password'
                            name='pw'
                            id='pw'
                            onBlur={pwHandleBlur}
                            className={pwFocused || pwValue !== '' ? 'focusedInput_pw' : 'normalInput_pw'}
                            ref={pwInputRef}
                            onChange={(e) => setPwValue(e.target.value)}
                        />
                    </div>
                    <div className='sign_main_div_kakao'>
                        <FontAwesomeIcon icon={faComment} />
                        <p>
                            카카오계정 로그인
                        </p>
                    </div>
                    <button className='sign_main_div_login_button' onClick={onLogin}>로그인</button>
                    <div className='sign_main_div_signup_div'>
                        <p>
                            아이디가 없으신가요?
                        </p>
                        <div className='sign_main_div_signup_button' onClick={toggleSignup}>회원 가입</div>
                    </div>
                </div>
                {/* 회원가입 박스 */}
                <div className={`sign_front_div ${isSigningUp ? 'active' : ''}`}>
                    <div className='sign_main_div_login'>
                        <p>
                            회원가입
                        </p>
                    </div>
                    <div className='sign_front_div_userId_check' onClick={idCheck}>아이디 중복 확인</div>
                    <div className='sign_front_div_userId'>
                        <label htmlFor='user_id' onClick={userIdHandleLabelClick} className={userIdFocused || userIdValue !== '' ? 'focusedLabel_user_id' : 'normalLabel_user_id'}>아이디</label>
                        <input
                            type='text'
                            name='user_id'
                            id='user_id'
                            onBlur={userIdHandleBlur}
                            className={userIdFocused || userIdValue !== '' ? 'focusedInput_user_id' : 'normalInput_user_id'}
                            ref={userIdInputRef}
                            onChange={(e) => setUserIdValue(e.target.value)}
                        />
                    </div>
                    <div className='sign_front_div_userPw'>
                        <label htmlFor='user_pw' onClick={userPwHandleLabelClick} className={userPwFocused || userPwValue !== '' ? 'focusedLabel_user_pw' : 'normalLabel_user_pw'}>비밀번호</label>
                        <input
                            type='password'
                            name='user_pw'
                            id='user_pw'
                            onBlur={userPwHandleBlur}
                            className={userPwFocused || userPwValue !== '' ? 'focusedInput_user_pw' : 'normalInput_user_pw'}
                            ref={userPwInputRef}
                            onChange={(e) => setUserPwValue(e.target.value)}
                        />
                    </div>
                    <div className='sign_front_div_username'>
                        <label htmlFor='user_name' onClick={userNameHandleLabelClick} className={userNameFocused || userNameValue !== '' ? 'focusedLabel_user_name' : 'normalLabel_user_name'}>닉네임</label>
                        <input
                            type='text'
                            name='user_name'
                            id='user_name'
                            onBlur={userNameHandleBlur}
                            className={userNameFocused || userNameValue !== '' ? 'focusedInput_user_name' : 'normalInput_user_name'}
                            ref={userNameInputRef}
                            onChange={(e) => setUserNameValue(e.target.value)}
                        />
                    </div>
                    <button className='sign_front_div_signup_button' onClick={onSubmit}>회원가입</button>
                    <div className='sign_front_div_signup_div'>
                        <p>
                            아이디가 있으신가요?
                        </p>
                        <div className='sign_front_div_login_button' onClick={toggleSignup}>로그인</div>
                    </div>
                </div>
            </div>
        </>
    );
}