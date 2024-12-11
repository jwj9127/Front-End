import React from 'react';
import style from '../../../../../styles/main/todolist.module.css';
import { Todo } from '../../_interface/ModalInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquare, faSquareCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ToDoListItemProps {
  todo: Todo;
  onRemove: (id: string) => void;
  onToggle: (completed: boolean) => void;
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
    <div className={style.item_li}>
      <div
        className={checked ? style.checkbox_on : style.checkbox_off}
        onClick={() => checked === false && onToggle(true)}
      >
        {checked ?
          <FontAwesomeIcon icon={faSquareCheck} className={style.check} />
          :
          <FontAwesomeIcon icon={faSquare} className={style.noncheck} />}
        <div className={style.text}>{title}</div>
      </div>
      {!checked && (
        <FontAwesomeIcon
          icon={faPenToSquare}
          className={style.edit}
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        />
      )}
      <FontAwesomeIcon
        icon={faTrash}
        className={style.remove}
        onClick={() => onRemove(id)}
      />
    </div >
  );
};

export default React.memo(ToDoListItem);
