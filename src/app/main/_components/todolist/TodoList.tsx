import React, { useCallback, useEffect, useState } from 'react';
import style from '../../../../../styles/main/todolist.module.css';
import { ModalProps } from '../../_interface/MainInterface';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import List from './List';
import Insert from './Insert';
import Edit from './Edit';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { addTodoAPI, completedTodoAPI, deleteTodoAPI, getTodoAPI, putTodoAPI } from '../../../../../store/main/todolistAPI';
import { Todo } from '../../_interface/MainInterface';

const TodoList: React.FC<ModalProps> = ({ isModalOpen, closeModal }) => {

    const userId = window.localStorage.getItem('userId');
    const dispatch = useDispatch<AppDispatch>();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const [insertToggle, setInsertToggle] = useState(false);

    const selectTodo = () => {
        dispatch(getTodoAPI(userId!))
            .unwrap()
            .then((response) => setTodos(response))
            .catch(console.error);
    }

    useEffect(() => {
        if (isModalOpen === true) {
            selectTodo();
        }
    }, [isModalOpen]);

    const onInsertToggle = useCallback(() => {
        setInsertToggle((prev) => !prev);
    }, []);

    const onChangeSelectedTodo = (todo: Todo) => {
        setSelectedTodo(todo);
    };

    const onInsert = useCallback((todoDTO: { userId: string; title: string; }) => {
        dispatch(addTodoAPI(todoDTO))
            .unwrap()
            .then((response) => {
                Swal.fire({
                    title: "작성 완료"
                });
                selectTodo();
            });
    }, []);

    const onRemove = useCallback((id: string) => {
        dispatch(deleteTodoAPI(id))
            .unwrap()
            .then(() => {
                Swal.fire({
                    title: "삭제 완료"
                });
                setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
            });
    }, []);

    const onUpdate = useCallback((todoDTO: { id: string; title: string; }) => {
        dispatch(putTodoAPI(todoDTO))
            .unwrap()
            .then(() => {
                Swal.fire({
                    title: "수정 완료"
                });
                setInsertToggle(false);
                selectTodo();
            });
    }, []);

    const onToggle = useCallback((todoDTO: { id: string; completed: boolean; }) => {
        dispatch(completedTodoAPI(todoDTO))
            .unwrap()
            .then(() => {
                Swal.fire({ title: "목표 완료" });
                selectTodo();
            });
    }, []);

    if (!isModalOpen) return null;

    return (
        <>
            <div className={style.main_div} onClick={(e) => e.stopPropagation()}>
                <div className={style.header}>
                    <p className={style.title}>Todo List</p>
                    <FontAwesomeIcon icon={faX} className={style.modal_out} onClick={closeModal} />
                </div>
                <div className={style.content}>
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
                </div>
            </div>
        </>
    )

}

export default TodoList;