const showProject = (state = {}, action) => {
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

module.exports = showProject
