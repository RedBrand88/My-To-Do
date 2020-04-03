import React, { Component } from 'react';
import Todos from './Components/Todos';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './Components/layout/Header';
import AddForm from './Components/AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          text: "take out the trash",
          completed: false
        },
        {
          id: uuidv4(),
          text: "do the dishes",
          completed: false
        },
        {
          id: uuidv4(),
          text: "walk the dog",
          completed: false
        }
      ]
    }
  }

  toggleComplete = (id) => {
    this.setState(this.state.todos.map(todo => {
      if(id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => id !== todo.id)]})
  }

  addForm = (text) => {
    const newObj = {
      id: uuidv4(),
      text,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newObj]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm addForm={this.addForm}/>
        <Todos 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
