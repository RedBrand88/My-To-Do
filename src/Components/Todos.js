import React from 'react';
import TodosItem from './TodosItem';

const Todos = (props) => {

    const {todos, toggleComplete, deleteTodo} = props;

    return todos.map(todo => (
        <TodosItem 
            key={todo.id} 
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
        />
    ));
}

export default Todos