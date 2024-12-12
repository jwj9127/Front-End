import styles from '../../../../styles/music/music.module.css';

export default function AiInput() {

    return (
        <>
            <div className={styles.ai_input_div}>
                <p>AI가 재생 목록을 추천해줘요!</p>
                <div className={styles.ai_input_form}>
                    <input type="text" placeholder='어떤 음악을 추천해드릴까요?' />
                    <button>추천받기</button>
                </div>
            </div>
        </>
    )
}