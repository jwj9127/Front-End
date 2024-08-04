import './Todolist.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TodoTemplate({ children }) {
    return (
        <div className="main_page_todolist_template">
            <div className="main_page_todolist_template_title">
                <p>Todo List</p>
                <FontAwesomeIcon icon={faX} className='main_page_todolist_template_title_out' />
            </div>
            <div className="main_page_todolist_template_content">{children}</div>
        </div>
    )
}

export default TodoTemplate;