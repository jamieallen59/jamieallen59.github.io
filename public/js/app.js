import React from 'react'
import { render } from 'react-dom'
import './components/animations/scrollHandler'
import PortfolioContainer from './containers/PortfolioContainer'
import { connect } from 'react-redux'
import configureStore from './configureStore'

require('../less/index.less')

const store = configureStore()

const mapStateToProps = (state) => ({
	selected: state.selected
})

const mapDispatchToProps = (dispatch) => ({
	onTabSelect(selected) {
		dispatch({ type: 'SELECT_TAB', selected })
	}
})

const App = connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)

render(
	<App store={store} />,
	document.getElementById('portfolio')
)
