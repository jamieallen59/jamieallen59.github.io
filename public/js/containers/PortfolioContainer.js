import React, { Component, PropTypes } from 'react'

import Label from '../components/Label.js'
import Project from '../components/Project'
import data from '../data.json'
import labelAnimation from '../components/animations/label'

class PortfolioContainer extends Component {
	componentDidMount() {
		labelAnimation()
	}

	renderLabels() {
		return this.props.projectData.map((result, index) => {
			const isSelected = this.props.selected
			const activeClass = isSelected === index ? 'active' : ''

			return (
				<Label
					key={ index }
					activeClass={`label__link ${activeClass}`}
					onClick={ () => this.props.onTabSelect(index) }
					workTitle={ this.props.projectData[index].label } />
			)
		})
	}

	renderProjects() {
		return this.props.projectData.map((result, index) => {
			return (
				<Project
					key={ index }
					selected={ this.props.selected }
					index={ index }
					projectData={ result } />
			)
		})
	}

	render() {
		return (
			<div>
				<div className='tabs__labels'>
					{ this.renderLabels() }
				</div>
				<div>
					{ this.renderProjects() }
				</div>
			</div>
		)
	}
}

PortfolioContainer.defaultProps = {
	projectData: data.work,
	isLoading: true
}

PortfolioContainer.propTypes = {
	onTabSelect: PropTypes.func.isRequired,
	selected: PropTypes.number.isRequired,
	projectData: PropTypes.array.isRequired
}

module.exports = PortfolioContainer
