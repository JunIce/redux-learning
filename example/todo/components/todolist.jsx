import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo,SHOW_ACTIVE,SHOW_ALL,SHOW_COMPLETE } from '../Actions'


class todoList extends Component {
	render(){
		const { todoLists,toggleTodos } = this.props;
		const textComp = { textDecoration : 'line-through'};
		return(
			<ul>
			{
				todoLists.map(item => {

					return <li 
					key={item.id} 
					data-id = {item.id}
					onClick={()=>{toggleTodos(item.id)}}
					style={item.complete ? textComp :{}}
					>{ item.text }</li>
				})
			}
			</ul>
		)
	}
	
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETE:
      return todos.filter(t => t.complete)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.complete)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state) => {
	return{
		todoLists : getVisibleTodos(state.AddToDo, state.filter)
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		toggleTodos : (id) => dispatch(toggleTodo(id))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(todoList);