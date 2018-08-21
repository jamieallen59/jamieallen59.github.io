import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Label from '../components/Label'
import Project from '../components/Project'
import labelAnimation from '../components/Label/labelAnimation'

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

	render() {
		const { projectData, selected, onTabSelect } = this.props

		return (
			<div>
				<div styleName='labelContainer'>
					{
						projectData.map((result, index) => {
							const isSelected = selected === index
							const activeClass = isSelected ? 'active' : ''

							return (
								<Label
									key={index}
									activeClass={activeClass}
									onClick={() => onTabSelect(index)}
									workTitle={projectData[index].label} />
							)
						})
					}
				</div>
				<div>
					{
						projectData.map((project, index) => (
							<Project
								key={`project_${index}`}
								selected={selected}
								index={index}
								projectData={project} />
						))
					}
				</div>
			</div>
		)
	}
}

export default CSSModules(PortfolioContainer, styles, { allowMultiple: true })
