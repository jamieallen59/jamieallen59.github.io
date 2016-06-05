import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Label from '../components/Labels/Label'
import Project from '../components/Projects/Project'
import labelAnimation from '../components/Labels/labelAnimation'
import data from '../data.json'

import styles from './PortfolioContainer.less'

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
					activeClass={activeClass}
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
				<div styleName='tabs__labels'>
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

export default CSSModules(PortfolioContainer, styles, { allowMultiple: true })
