import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './Label.less'

const Label = ({ activeClass, onClick, workTitle }) => (
	<div styleName='label show-label'>
		<a styleName={`label__link ${activeClass}`}
			onClick={onClick}>
			{workTitle}
		</a>
	</div>
)

Label.propTypes = {
	onClick: PropTypes.func.isRequired,
	activeClass: PropTypes.string.isRequired,
	workTitle: PropTypes.string.isRequired
}

export default CSSModules(Label, styles, { allowMultiple: true })
