import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "take out the trash",
        completed: false
      },
      {
        id: 2,
        text: "do the dishes",
        completed: true
      },
      {
        id: 3,
        text: "walk the dog",
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
