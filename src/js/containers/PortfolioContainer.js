import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Label from '../components/Labels/Label'
import Project from '../components/Projects/Project'
import labelAnimation from '../components/Labels/labelAnimation'
import data from '../data.json'

import styles from './PortfolioContainer.less'

class PortfolioContainer extends Component {
	static defaultProps = {
		projectData: data.work,
		isLoading: true
	}

	static propTypes = {
		onTabSelect: PropTypes.func.isRequired,
		selected: PropTypes.number.isRequired,
		projectData: PropTypes.array.isRequired
	}

	componentDidMount() {
		labelAnimation()
	}

	renderLabels() {
		const { projectData, selected } = this.props

		return projectData.map((result, index) => {
			const isSelected = selected === index
			const activeClass = isSelected ? 'active' : ''

			return (
				<Label
					key={index}
					activeClass={activeClass}
					onClick={() => this.props.onTabSelect(index)}
					workTitle={this.props.projectData[index].label} />
			)
		})
	}

	renderProjects() {
		const { projectData } = this.props

		return projectData.map((result, index) => (
			<Project
				key={index}
				selected={this.props.selected}
				index={index}
				projectData={result} />
		))
	}

	render() {
		return (
			<div>
				<div styleName='tabs__labels'>
					{this.renderLabels()}
				</div>
				<div>
					{this.renderProjects()}
				</div>
			</div>
		)
	}
}

export default CSSModules(PortfolioContainer, styles, { allowMultiple: true })
