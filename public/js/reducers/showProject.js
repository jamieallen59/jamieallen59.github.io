const showProject = (state = { selected: 0 }, action) => {
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
