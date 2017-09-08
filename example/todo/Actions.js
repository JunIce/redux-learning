export const ADD_TODO = "ADD_TODO"
export const TOGOLE_TODO = "TOGOLE_TODO"

export const SHOW_ALL = "SHOW_ALL"
export const SHOW_COMPLETE = "SHOW_COMPLETE"
export const SHOW_ACTIVE = "SHOW_ACTIVE"

export const LIST_FILTER = "LIST_FILTER"
let ToDoId = 0;

export const addtodo = ( text ) => ({
	type: ADD_TODO,
	id : ToDoId++,
	text
})

export const toggleTodo = ( id ) => ({
	type: TOGOLE_TODO,
	id
})

export const listFilter = ( filter ) => ({
	type : LIST_FILTER,
	filter
})