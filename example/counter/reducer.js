import { INCREASE, DECREASE } from './action'
import { combineReducers } from 'redux'

const initialstate = 0;
const dickNum = (state = initialstate, action ) => {
	switch(action.type){
		case INCREASE:
			return state + 1;
		case DECREASE :
			return state - 1;
		default : 
			return state
	}
}





const rootReducer = combineReducers({
  	dickNum
})

export default rootReducer