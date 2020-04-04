import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './Components/Todos';
import Header from './Components/layout/Header';
import AddForm from './Components/AddForm';
import About from './Components/Pages/About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        
      ]
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (
        this.setState({ todos: res.data})
      ))
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

  addForm = (title) => {
    const newObj = {
      id: uuidv4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newObj]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddForm addForm={this.addForm}/>
              <Todos 
                todos={this.state.todos} 
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
              />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
