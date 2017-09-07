import React, { Component } from 'react'
import { connect } from 'react-redux'

class todoList extends Component {
	render(){
		const { todoLists } = this.props
		return(
			<ul>
			{
				todoLists.map((item,key) => {
					return <li key={key}>{ item.text }</li>
				})
			}
			</ul>
		)
	}
	
}


const mapStateToProps = (state) => {
	return{
		todoLists : state.AddToDo
	}
}
export default connect(mapStateToProps)(todoList);