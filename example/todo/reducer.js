import { combineReducers } from 'redux'
import { ADD_TODO } from './Actions'

const AddToDo = (state = [], action) => {
	switch(action.type){
		case ADD_TODO:
			return [...state, {
				text : action.text,
				complete: false
			}]
		default:
			return state;
	}
}




export default combineReducers({AddToDo})