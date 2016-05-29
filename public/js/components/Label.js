import React, { PropTypes } from 'react'

const Label = ({ activeClass, onClick, workTitle }) => {
	return (
		<div className='label'>
			<a className={ activeClass } onClick={ onClick }>
				{ workTitle }
			</a>
		</div>
	)
}

Label.propTypes = {
	onClick: PropTypes.func.isRequired,
	activeClass: PropTypes.string.isRequired,
	workTitle: PropTypes.string.isRequired
}

export default Label
