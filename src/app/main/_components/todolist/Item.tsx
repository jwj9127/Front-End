import React from 'react';
import { Todo } from '../../_interface/ModalInterface';

interface ToDoListItemProps {
  todo: Todo;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
  onChangeSelectedTodo: (todo: Todo) => void;
  onInsertToggle: () => void;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
}) => {
  const { id, title, checked } = todo;

  return (
    <div className="TodoListItem-virtualized">
      <li className="TodoListItem">
        <div
          className={checked ? "" : ""}
          onClick={() => !checked && onToggle(id)}
        >
          {checked ? <div></div> : <div></div>}
          <div className="text">{title}</div>
        </div>
        {!checked && (
          <div
            className="edit"
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInsertToggle();
            }}
          >
            <div></div>
          </div>
        )}
        <div className="remove" onClick={() => onRemove(id)}>
          <div></div>
        </div>
      </li>
    </div>
  );
};

export default React.memo(ToDoListItem);
