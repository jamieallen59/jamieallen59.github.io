import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Gallery from '../Gallery'

import styles from './Project.less'

const Project = ({ index, selected, projectData }) => {
	const { url, title, description, imageNames } = projectData
	const showWork = index !== selected ? 'dont-display' : ''

	return (
		<div className={ showWork } styleName={`tabs__content ${showWork}`}>
			<div styleName='work__container'>
				<Gallery images={imageNames} />
				<div styleName='work-summary'>
					<a href={ `https:// ${url}` } styleName='work-url'>{ url }</a>
					<div styleName='work-title'>{ title }</div>
					<div styleName='work-description'>{ description }</div>
				</div>
			</div>
		</div>
	)
}

Project.propTypes = {
	index: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	projectData: PropTypes.shape({
		imageNames: PropTypes.array.isRequired,
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
}

export default CSSModules(Project, styles, { allowMultiple: true })
