import { useState, useRef, useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import ToDoEdit from './Edit.jsx';
import ToDoInsert from './Insert.jsx';
import TodoList from './List.jsx';
import TodoTemplate from './Template.jsx';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Todolist() {

    const token = window.localStorage.getItem('token');
    const user_id = window.localStorage.getItem('userId');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `/todo/${user_id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            const fetchedTodos = result.data.map(todo => ({
                ...todo,
                checked: todo.completed,
            }));
            setTodos(fetchedTodos);
        })
        console.log(todos)
    }, [])

    const chatStyles = {
        overlay: {
            backgroundColor: "#29293E",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "550px",
            height: "600px",
            zIndex: 1,
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: 0,
            borderRadius: "7px",
            backgroundColor: "#29293E",
        },
    };

    const [selectedTodo, setSelectedTodo] = useState(null);
    const [insertToggle, setInsertToggle] = useState(false);

    const onInsertToggle = useCallback(() => {
        if (selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToggle((prev) => !prev);
    }, [selectedTodo]);

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo(todo);
    };

    const onInsert = useCallback((text) => {
        const todo = {
            title: text,
            completed: false,
        };
        axios({
            method: 'post',
            url: `/todo/create/${user_id}`,
            data: todo,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            if (result.status == 200) {
                Swal.fire({
                    title: "추가 완료!"
                });
            }
        })
    }, []);

    const onRemove = useCallback((id) => {
        axios({
            method: 'delete',
            url: `/todo/delete/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            if (result.status === 204) {
                Swal.fire({
                    title: "삭제 완료!"
                })
            }
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const onUpdate = useCallback(

        (id, text) => {
            onInsertToggle();
            axios({
                method: 'post',
                url: '/todo/modify',
                data: {
                    userId: user_id,
                    id: id,
                    title: text,
                    completed: false
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(result => {
                console.log(result)
                if (result.status === 200) {
                    Swal.fire({
                        title: "수정 완료!"
                    })
                }
            }).catch(error => {
                console.error(error);
            });
            setTodos((todos) =>
                todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
            );
        },
        [onInsertToggle],
    );

    const onToggle = useCallback((id) => {
        const todo = todos.find(todo => todo.id === id);
        if (todo.completed) {
            return;
        }
        axios({
            method: 'post',
            url: `/todo/toggle/${user_id}/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(result => {
            console.log(result)
            if (result.status === 200) {
                Swal.fire({
                    title: "목표 완료!"
                })
            }
        }).catch(error => {
            console.error(error);
        });
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    }, [todos]);

    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal isOpen={isModalOpen} style={chatStyles}>
            <TodoTemplate closeModal={closeModal}>
                <ToDoInsert onInsert={onInsert} />
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                    onInsertToggle={onInsertToggle}
                />
                {insertToggle && (
                    <ToDoEdit
                        onInsert={onInsert}
                        selectedTodo={selectedTodo}
                        onInsertToggle={onInsertToggle}
                        onUpdate={onUpdate}
                        insertToggle={insertToggle}
                    />
                )}
            </TodoTemplate>
        </Modal>
    );
}