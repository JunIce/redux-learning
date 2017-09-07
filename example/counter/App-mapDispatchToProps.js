import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
import { DECREASE, INCREASE } from './action'


class App extends Component {
 
  render() {
        const { increase , decrease } = this.props
      console.log(this.props)
    return (
        <div className="App">
            <h1>{this.props.num}</h1>
            <button onClick={increase}>INCREASE</button>
            <button onClick={decrease}>DECREASE</button>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
        num : state.dickNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    increase : () => dispatch({type:INCREASE}),
    decrease : () => dispatch({type:DECREASE}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
