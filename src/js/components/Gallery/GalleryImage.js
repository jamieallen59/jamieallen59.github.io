import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './Gallery.less'
import { className } from './Gallery'

const GalleryImage = ({ imageUrl, onClick, display = true }) => (
	<div
		onClick={onClick}
	>
		<img styleName={display ? `${className}__image` : `${className}__image ${className}__image--hidden`} // eslint-disable-line max-len
			src={imageUrl}
			role='presentation'
		/>
	</div>
)

GalleryImage.propTypes = {
	display: PropTypes.bool,
	imageUrl: PropTypes.string,
	onClick: PropTypes.func
}

export default CSSModules(GalleryImage, styles, { allowMultiple: true })
