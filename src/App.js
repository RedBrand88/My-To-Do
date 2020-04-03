import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';

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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
