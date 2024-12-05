import React, { useCallback, useEffect, useState } from 'react';
import style from '../../../../../styles/main/todolist.module.css';
import { ModalProps } from '../../_interface/ModalInterface';
import TodoTemplate from './TodoTemplate';
import List from './List';
import Insert from './Insert';
import Edit from './Edit';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { addTodoAPI, completedTodoAPI, deleteTodoAPI, getTodoAPI, putTodoAPI } from '../../../../../store/main/todolistAPI';
import { Todo } from '../../_interface/ModalInterface';

const TodoList: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const userId = window.localStorage.getItem('userId');
    const dispatch = useDispatch<AppDispatch>();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const [insertToggle, setInsertToggle] = useState(false);

    useEffect(() => {
        if (isModalOpen === true) {
            dispatch(getTodoAPI(userId!))
                .unwrap()
                .then((response) => setTodos(response))
                .catch(console.error);
        }
    }, [todos]);

    const onInsertToggle = useCallback(() => {
        if (selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToggle((prev) => !prev);
    }, [selectedTodo]);

    const onChangeSelectedTodo = (todo: Todo) => {
        setSelectedTodo(todo);
    };

    const onInsert = useCallback((todoDTO: { userId: string; title: string; }) => {
        dispatch(addTodoAPI(todoDTO))
            .unwrap();
        Swal.fire({
            title: "작성 완료",
        });
    }, []);

    const onRemove = useCallback((id: string) => {
        dispatch(deleteTodoAPI(id))
            .unwrap();
        Swal.fire({
            title: "삭제 완료!",
        });
    }, []);

    const onUpdate = useCallback((todoDTO: { id: string; title: string; }) => {
        dispatch(putTodoAPI(todoDTO))
            .unwrap();
        Swal.fire({
            title: "수정 완료!",
        });
    }, []);

    const onToggle = useCallback((todoDTO: { id: string; completed: boolean; }) => {
        dispatch(completedTodoAPI(todoDTO))
            .unwrap();
        Swal.fire({
            title: "목표 완료!",
        });
    }, []);

    if (!isModalOpen) return null;

    return (
        <>
            <div className={style.main_div} onClick={(e) => e.stopPropagation()}>
                <TodoTemplate closeModal={closeModal}>
                    <Insert onInsert={onInsert} />
                    <List
                        todos={todos}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onChangeSelectedTodo={onChangeSelectedTodo}
                        onInsertToggle={onInsertToggle}
                    />
                    {insertToggle && (
                        <Edit
                            selectedTodo={selectedTodo}
                            onUpdate={onUpdate}
                        />
                    )}
                </TodoTemplate>
            </div>
        </>
    )

}

export default TodoList;