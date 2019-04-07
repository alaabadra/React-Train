import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos"
class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Take out trash',
        completed: false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed: true
      },
      {
        id:3,
        title:'meeting with boss',
        completed: false
      }
    ]
  }
  // markComplete = () => {
  //   console.log('form app.js')
  // }
  markComplete = (id) => {
    // console.log(id)
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //delete
  delTodo = (id) => {
    // console.log(id)
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id !== id)]})
  }
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
