import { useCallback, useState } from "react";
import style from '../../../../../styles/main/todolist.module.css';

interface ToDoInsertProps {
    onInsert: (todoDTO: { userId: string; title: string }) => void;
}

const ToDoInsert: React.FC<ToDoInsertProps> = ({ onInsert }) => {

    const userId = window.localStorage.getItem('userId');
    const [value, setValue] = useState('');
    const todoDTO = { userId: userId!, title: value };

    const onChange = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e: any) => {
            onInsert(todoDTO);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className={style.insertForm} onSubmit={onSubmit}>
            <input
                className={style.insert_input}
                onChange={onChange}
                value={value}
                placeholder="할 일을 입력하세요"
            />
            <button type="submit" className={style.insert_button}>
                추가
            </button>
        </form>
    );
}

export default ToDoInsert;
