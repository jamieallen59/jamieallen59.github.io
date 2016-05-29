import React, { PropTypes } from 'react'

const Project = ({ index, selected, projectData }) => {
	const { imageClass, url, title, description, imageName } = projectData
	const showWork = index !== selected ? 'dont-display' : ''
	const projectImage = document.createElement('img')

	projectImage.src = require(`../../images/${imageName}`) // eslint-disable-line global-require

	return (
		<div className={ showWork } className={`tabs__content ${showWork}`}>
			<div className='work__container'>
				<div>
					<img className={ `work__image ${imageClass}` }
						src={ projectImage.src }
						role='presentation' />
				</div>
				<div className='work-summary'>
					<a href={ `https:// ${url}` } className='work-url'>{ url }</a>
					<div className='work-title'>{ title }</div>
					<div className='work-description'>{ description }</div>
				</div>
			</div>
		</div>
	)
}


Project.propTypes = {
	index: PropTypes.number.isRequired,
	selected: PropTypes.number.isRequired,
	projectData: PropTypes.shape({
		imageClass: PropTypes.string.isRequired,
		imageName: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
}

export default Project
