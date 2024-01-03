import React from 'react';

const TodoInput = (props) => {       

        return (
            <div className="card card-body my-3">
                <form onSubmit={props.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-success text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="Add item" value={props.item} onChange={props.handleChange}/>
                    </div>
                    <button type="submit" disabled={props.item?false:true} className={`btn btn-block mt-3 text-uppercase ${(props.editItem) ? "btn-success" : "btn-primary"}`}>
                        {props.editItem ? 'edit item': 'add item'}
                    </button>
                </form>
            </div>
        )
    
}

export default TodoInput;
