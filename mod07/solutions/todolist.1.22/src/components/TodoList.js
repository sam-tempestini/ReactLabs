import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {props.items.map(
                    item => <TodoItem key={item.id} title={item.title}  handleEdit={()=>{props.handleEdit(item.id)}}  handleDelete={()=>props.handleDelete(item.id)} />
                )}
{
    props.items.length === 0 ? <p>No items</p> : 

                <button type="button" 
                        className="btn btn-danger btn-block text-uppercase mt-5"
                        onClick={props.clearList}>
                    clear list
                </button>
            }
</ul>

        )
    
}

export default TodoList;