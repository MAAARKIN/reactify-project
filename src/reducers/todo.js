import * as types from '../constants/ActionTypes'

const initialState = {
	messages: ['state', 'teste2']
}

const todos = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
			// console.log('addMessage')
			// console.log(action.message.message);
			return Object.assign({}, state, {
				messages: [
					...state.messages, 
					action.message.message
				]
			});
		default:
			return state;
	}
}


export default todos;