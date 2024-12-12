import { useDispatch } from 'react-redux';
import styles from '../../../../styles/music/music.module.css';
import { AppDispatch } from '../../../../store/store';
import { useState } from 'react';
import { addListByAiAPI } from '../../../../store/music/musicAPI';
import Swal from 'sweetalert2';

export default function AiInput() {

    const dispatch = useDispatch<AppDispatch>();
    const userId = window.localStorage.getItem('userId');

    const [keywordOrGenre, setKeywordOrGenre] = useState('');

    const onChange = (e: any) => {
        setKeywordOrGenre(e.target.value);
    };

    const addAIList = () => {
        const addAIDTO = {
            userId: userId!,
            keywordOrGenre: keywordOrGenre
        }
        if (keywordOrGenre) {
            dispatch(addListByAiAPI(addAIDTO))
                .unwrap()
                .then(() => {
                    Swal.fire({
                        title: "추가 완료"
                    })
                })
                .catch(error => {
                    if (error.response && error.response.status === 400) {
                        Swal.fire({
                            title: "오류가 발생하였습니다."
                        })
                    }
                });
        } else {
            Swal.fire({
                title: "빈 칸은 작성이 안됩니다.",
            });
        }
    }

    return (
        <>
            <div className={styles.ai_input_div}>
                <p>AI가 재생 목록을 추천해줘요!</p>
                <div className={styles.ai_input_form}>
                    <input
                        type="text"
                        value={keywordOrGenre}
                        placeholder='어떤 음악을 추천해드릴까요?'
                        onChange={onChange}
                    />
                    <button onClick={() => addAIList()}>추천받기</button>
                </div>
            </div>
        </>
    )
}