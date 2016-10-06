import showProject from './reducers/showProject'
import { createStore } from 'redux'

const configureStore = () => {
	const persistedState = {
		selected: 0
	}
	const store = createStore(showProject, persistedState)

	return store
}

export default configureStore
