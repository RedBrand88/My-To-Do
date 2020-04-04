import React from 'react';

const getStyle = (completed) => {
    return {
        backgroundColor: "#f4f4f4",
        borderBottom: "1px #ccc dotted",
        padding: "5px 0px",
        textDecoration: completed ? "line-through" : "none"
    }
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    float: "right",
    marginRight: "5px",
    cursor: "pointer"
}

const TodosItem = (props) => {
    
    const {id, completed, title} = props.todo;
    return (
        <div style={getStyle(completed)}>
            <input style={{marginLeft: "5px"}} type="checkbox" onChange={props.toggleComplete.bind(this, id)}/> {' '}
            {title}
            {/** create a delete button component */}
            <button style={btnStyle} onClick={props.deleteTodo.bind(this, id)}>x</button>
        </div>
    );
}

export default TodosItem;