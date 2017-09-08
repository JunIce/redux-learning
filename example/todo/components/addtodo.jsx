import React, { Component } from 'react'
import { addtodo } from '../Actions'
import { connect } from 'react-redux'

class AddToDo extends Component {
	inputValue(e){
		if(e.keyCode === 13) {
			const val = e.target.value
			this.props.addtodos(val)
			e.target.value = ''
		}
	}
	render() {

		return(
			<div>
				<input type="text"
          			onKeyUp={ this.inputValue.bind(this) }
          		/>

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		addtodos : ( text ) => dispatch(addtodo(text))
	}
}
export default connect(null, mapDispatchToProps)(AddToDo)