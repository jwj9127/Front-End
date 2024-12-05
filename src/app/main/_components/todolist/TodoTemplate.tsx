import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { TodoTemplateProps } from '../../_interface/ModalInterface';

function TodoTemplate({ children, closeModal }: TodoTemplateProps) {
    return (
        <div className="main_page_todolist_template">
            <div className="main_page_todolist_template_title">
                <p>Todo List</p>
                <FontAwesomeIcon icon={faX} className='main_page_todolist_template_title_out' onClick={closeModal}/>
            </div>
            <div className="main_page_todolist_template_content">{children}</div>
        </div>
    )
}

export default TodoTemplate;