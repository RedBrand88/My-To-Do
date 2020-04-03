import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';
import Header from './Components/layout/Header';
import AddForm from './Components/AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "take out the trash",
          completed: false
        },
        {
          id: 2,
          text: "do the dishes",
          completed: false
        },
        {
          id: 3,
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

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm />
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
