import React, { Component } from 'react';
import AddTodo from './components/addtodo'
import TodoList from './components/todolist'



class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
