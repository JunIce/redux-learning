import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
import { DECREASE, INCREASE } from './action'


class App extends Component {
  increase(){
    store.dispatch({type:INCREASE})
  }
  decrease(){
    store.dispatch({type:DECREASE})
  }
  render() {
    return (

        <div className="App">
            <h1>{this.props.num}</h1>
            <button onClick={this.increase}>INCREASE</button>
            <button onClick={this.decrease}>DECREASE</button>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
        num : state.dickNum
  }
}

export default connect(mapStateToProps)(App);
