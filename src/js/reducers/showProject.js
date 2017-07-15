import { createSelector } from 'reselect'

const SELECT_TAB = 'SELECT_TAB'

const showProject = (state = {}, action) => {
	switch (action.type) {
		case SELECT_TAB:
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
