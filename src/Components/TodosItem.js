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
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    float: "right",
    marginRight: "2px"
}

const TodosItem = (props) => {
    
    const {id, completed, text} = props.todo;
    return (
        <div style={getStyle(completed)}>
            <input type="checkbox" onChange={props.toggleComplete.bind(this, id)}/> {' '}
            {text}
            {/** create a delete button component */}
            <button style={btnStyle} onClick={props.deleteTodo.bind(this, id)}>x</button>
        </div>
    );
}

export default TodosItem;