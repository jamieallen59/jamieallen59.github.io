import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import PortfolioContainer from './containers/PortfolioContainer'
import { getSelectedProject } from './reducers/showProject'
import configureStore from './configureStore'

import './utils/scrollHandler'

require('../less/index.less')

const store = configureStore()

const mapStateToProps = state => ({
	selected: getSelectedProject(state)
})

const mapDispatchToProps = dispatch => ({
	onTabSelect(selected) {
		dispatch({ type: 'SELECT_TAB', selected })
	}
})

const App = connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)

render(
	<App store={store} />,
	document.getElementById('portfolio')
)
