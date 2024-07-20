import React from "react";

export const TodolistButoon = () => {
  return <button id="todolist">투두리스트</button>;
};

export const TodolistPopup = () => {
  return (
    <div className="popup todolist_popup">
      <button className="exit"></button>
      <div className="todoList">
        <ul>
          <li>
            <input className="check" type="checkbox"></input>
            <input className="text" type="text"></input>
          </li>
          <li>
            <input className="check" type="checkbox"></input>
            <input className="text" type="text"></input>
          </li>
          <li>
            <input className="check" type="checkbox"></input>
            <input className="text" type="text"></input>
          </li>
          <li>
            <input className="check" type="checkbox"></input>
            <input className="text" type="text"></input>
          </li>
          <li>
            <input className="check" type="checkbox"></input>
            <input className="text" type="text"></input>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Todolist = {
  TodolistButoon,
  TodolistPopup,
};

export default Todolist;
