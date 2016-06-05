import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './Project.less'

const Project = ({ index, selected, projectData }) => {
	const { url, title, description, imageName } = projectData
	const showWork = index !== selected ? 'dont-display' : ''
	const projectImage = document.createElement('img')

	projectImage.src = require(`../../images/${imageName}`) // eslint-disable-line global-require

	return (
		<div className={ showWork } styleName={`tabs__content ${showWork}`}>
			<div styleName='work__container'>
				<div>
					<img styleName='work__image'
						src={ projectImage.src }
						role='presentation' />
				</div>
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
		imageName: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
}

export default CSSModules(Project, styles, { allowMultiple: true })
