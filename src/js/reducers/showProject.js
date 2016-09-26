export default (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_TAB':
			return {
				...state,
				selected: action.selected
			}
		default:
			return state
	}
}
