import React from 'react'

const TodoItem = (props) => {
    
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{props.title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={props.handleEdit}>
                        <i className="fas fa-pen"/>
                    </span>
                    <span className="mx-2 text-danger" onClick={props.handleDelete}>
                        <i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        )
    
}

export default TodoItem;