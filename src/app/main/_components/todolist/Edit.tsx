import { useCallback, useEffect, useState } from 'react';
import { Todo } from '../../_interface/ModalInterface';
import style from '../../../../../styles/main/todolist.module.css';

interface ToDoEditProps {
    selectedTodo: Todo | null;
    onUpdate: (todoDTO: { id: string; title: string }) => void;
}

const ToDoEdit: React.FC<ToDoEditProps> = ({ selectedTodo, onUpdate }) => {
    const [value, setValue] = useState('');
    const todoDTO = { id: selectedTodo!.id, title: value };

    const onChange = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e: any) => {
            if (selectedTodo) {
                onUpdate(todoDTO);
                setValue('');
            }
            e.preventDefault();
        },
        [onUpdate, value, selectedTodo],
    );

    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.title);
        }
    }, [selectedTodo]);

    return (
        <div className={style.background}>
            <form onSubmit={onSubmit} className={style.todoedit__insert}>
                <h2>수정하기</h2>
                <input
                    onChange={onChange}
                    value={value}
                    placeholder="할 일을 입력하세요"
                />
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default ToDoEdit;
