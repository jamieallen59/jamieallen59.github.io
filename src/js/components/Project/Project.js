import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Gallery from '../Gallery'
import styles from './Project.less'

const Project = ({ index, selected, projectData }) => {
	const { url, title, description, imageNames } = projectData
	const showWorkClassName = index !== selected ? 'dont-display' : ''

	const urlElement = Array.isArray(url)
		?	<div styleName='url-wrapper'>
			<a href={ `https:// ${url[0].ios}` } styleName='work-url'>WonderBill - iOS</a>
			<a href={ `https:// ${url[0].android}` } styleName='work-url'>WonderBill - Android</a>
		</div>
		: <a href={ `https:// ${url}` } styleName='work-url'>{ url }</a>

	return (
		<div className={showWorkClassName} styleName={`tabs__content ${showWorkClassName}`}>
			<div styleName='work__container'>
				{
					imageNames.length
						? <Gallery images={imageNames} />
						: <div>Images coming soon...</div>
				}
				<div styleName='work-summary'>
					{urlElement}
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
		url: PropTypes.oneOfType([
			PropTypes.string.isRequired,
			PropTypes.array.isRequired
		]).isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
}

export default CSSModules(Project, styles, { allowMultiple: true })
