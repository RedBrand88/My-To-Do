import React from 'react';

const getStyle = (completed) => {
    return {
        backgroundColor: "#f4f4f4",
        borderBottom: "1px #ccc dotted",
        textDecoration: completed ? "line-through" : "none"
    }
}

const markComplete = (e) => {
    console.log(e.target.value);
}

const TodosItem = ({text, completed}) => {
    return (
        <div style={getStyle(completed)}>
            <input type="checkbox" onChange={markComplete}/>
            {text}
            {/** create a delete button component */}
            <span>x</span>
        </div>
    );
}

export default TodosItem;