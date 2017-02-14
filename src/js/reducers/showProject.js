import { createSelector } from 'reselect'

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

export default showProject

const getSelected = state => state.selected

export const getSelectedProject = createSelector(
	getSelected,
	selected => selected
)
