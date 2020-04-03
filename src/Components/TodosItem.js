import React from 'react';

const getStyle = (completed) => {
    return {
        backgroundColor: "#f4f4f4",
        borderBottom: "1px #ccc dotted",
        textDecoration: completed ? "line-through" : "none"
    }
}

const TodosItem = (props) => {
    
    const {id, completed, text} = props.todo;
    return (
        <div style={getStyle(completed)}>
            <input type="checkbox" onChange={props.toggleComplete.bind(this, id)}/>
            {text}
            {/** create a delete button component */}
            <span>x</span>
        </div>
    );
}

export default TodosItem;