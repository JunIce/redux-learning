import React, { Component } from 'react';
import AddTodo from './components/addtodo'
import TodoList from './components/todolist'
import  Footer from './components/footer'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>TODO-LIST</h3>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
