import React from 'react';
import TodosItem from './TodosItem';

const Todos = ({todos}) => {
    return todos.map(todo => (
        <TodosItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}
        />
    ));
    
}

export default Todos