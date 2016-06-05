import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './Label.less'

const Label = (props) => (
	<div styleName='label show-label'>
		<a styleName={`label__link ${props.activeClass}`}
			onClick={ props.onClick }>
			{ props.workTitle }
		</a>
	</div>
)

Label.propTypes = {
	onClick: PropTypes.func.isRequired,
	activeClass: PropTypes.string.isRequired,
	workTitle: PropTypes.string.isRequired
}

export default CSSModules(Label, styles, { allowMultiple: true })
