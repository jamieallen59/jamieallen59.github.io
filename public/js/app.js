import React from 'react'
import { render } from 'react-dom'

import './components/animations/scrollHandler'
import PortfolioContainer from './containers/PortfolioContainer'
import showProject from './reducers/showProject'
import { createStore } from 'redux'
import { connect } from 'react-redux'

require('../less/index.less')

const store = createStore(showProject)

const mapStateToProps = (state) => {
	return {
		selected: state.selected
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTabSelect: (selected) => {
			dispatch({ type: 'SELECT_TAB', selected })
		}
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)

render(
	<App store={store} />,
	document.getElementById('portfolio')
)
