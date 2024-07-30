import { useState, useRef, useCallback } from 'react';
import Modal from 'react-modal';
import ToDoEdit from './Edit.jsx';
import ToDoInsert from './Insert.jsx';
import TodoList from './List.jsx';
import TodoTemplate from './Template.jsx';

export default function Todolist() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 하기',
            checked: true,
        },
        {
            id: 3,
            text: '투두리스트 만들기',
            checked: false,
        }
    ]);

    const chatStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
            position: "static",
            top: 0,
            left: 0,
        },
        content: {
            width: "400px",
            height: "500px",
            zIndex: 150,
            position: "fixed",
            top: "53%",
            left: "81%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            overflow: "auto",
            padding: 0
        },
    };

    const [selectedTodo, setSelectedTodo] = useState(null);
    const [insertToggle, setInsertToggle] = useState(false);

    const nextId = useRef(4);
    const onInsertToggle = useCallback(() => {
        if (selectedTodo) {
            setSelectedTodo((selectedTodo) => null);
        }
        setInsertToggle((prev) => !prev);
    }, [selectedTodo]);

    const onChangeSelectedTodo = (todo) => {
        setSelectedTodo((selectedTodo) => todo);
    };

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
        nextId.current++; //nextId 1씩 더하기
    }, []);

    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
    const onUpdate = useCallback(
        (id, text) => {
            onInsertToggle();

            setTodos((todos) =>
                todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
            );
        },
        [onInsertToggle],
    );
    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    }, []);
    return (
        <Modal isOpen={true} style={chatStyles}>
            <TodoTemplate>
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