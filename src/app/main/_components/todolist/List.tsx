import React, { useCallback } from 'react';
import ToDoListItem from './Item';
import { TodoListProps } from '../../_interface/ModalInterface';

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onRemove,
    onToggle,
    onChangeSelectedTodo,
    onInsertToggle,
}) => {

    return (
        <div
            className="main_page_todolist_list"
            style={{ width: 530, height: 490 }} // 스타일로 너비와 높이 지정
        >
            {todos.map((todo) => (
                <ToDoListItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => onToggle({ id: todo.id, completed: true})}
                    onRemove={onRemove}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                />
            ))}
        </div>
    );
};

export default React.memo(TodoList);
