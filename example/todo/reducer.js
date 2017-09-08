import { combineReducers } from 'redux'
import { ADD_TODO,TOGOLE_TODO,SHOW_ALL,LIST_FILTER } from './Actions'
const AddToDo = (state = [], action) => {
	switch(action.type){
		case ADD_TODO:
			return [...state, {
				id : action.id,
				text : action.text,
				complete: false
			}]

		case TOGOLE_TODO :
			return state.map(todo => (todo.id === action.id) 
          ? {...todo, complete: !todo.complete}
          : todo)
		default:
			return state;
	}
}

const filter = (state=SHOW_ALL, action) => {
	switch(action.type) {
		case LIST_FILTER :
			return action.filter
		default : 
			return state
	}
}




export default combineReducers({AddToDo,filter})