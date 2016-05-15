import React, { PropTypes } from 'react'

const Label = (props) => {
	return (
		<div className='label'>
			<a href='#'
				className={ props.activeClass }
				onClick={ props.onSelectLabel }>
				{ props.workTitle }
			</a>
		</div>
	)
}

Label.propTypes = {
	activeClass: PropTypes.string.isRequired,
	onSelectLabel: PropTypes.func.isRequired,
	workTitle: PropTypes.string.isRequired
}

export default Label
