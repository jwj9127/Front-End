import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from 'react-icons/md';
import cn from 'classnames';

function ToDoListItem({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
  style
}) {
  const { id, title, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <li className="TodoListItem">
        <div
          className={cn('checkbox', { checked: checked })}
          onClick={() => !checked && onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
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
            <MdModeEditOutline />
          </div>
        )}
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </li>
    </div>
  );
}

export default React.memo(ToDoListItem);