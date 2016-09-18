import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import GalleryImage from './GalleryImage.js'
import styles from './Gallery.less'

export const className = 'gallery'

class Gallery extends Component {
	constructor(props) {
		super(props)

		this.state = { activeImageIndex: 0 }
	}

	advanceImageIndex = () => {
		const { images = [] } = this.props
		const { activeImageIndex } = this.state
		const imageCount = images.length

		let newImageIndex = activeImageIndex + 1
		newImageIndex = newImageIndex === imageCount ? 0 : newImageIndex

		this.setState({ activeImageIndex: newImageIndex })
	}

	render() {
		const { images = [] } = this.props
		const { activeImageIndex } = this.state
		const isMorethanOneImage = images.length > 1
		const advanceImageIndex = isMorethanOneImage ? this.advanceImageIndex : null
		const galleryClass = isMorethanOneImage ? className : `${className} ${className}--singleImage`

		return (
			<div styleName={galleryClass}>
				{images.map((imageUrl, i) => {
					const projectImage = document.createElement('img')
					projectImage.src = require(`../../../images/${imageUrl}`) // eslint-disable-line

					return (
						<GalleryImage
							key={`${imageUrl}-${i}`}
							imageUrl={projectImage.src}
							onClick={advanceImageIndex}
							display={activeImageIndex === i}
						/>
					)
				})}
			</div>
		)
	}
}

Gallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string)
}

export default CSSModules(Gallery, styles, { allowMultiple: true })
