import React, { PropTypes } from 'react';

const Label = (props) => {
    return (
        <div className="label">
            <a href='#'
                className={ props.activeClass }
                onClick={ props.onSelectLabel }>
                { props.workTitle }
            </a>
        </div>
    )
}

Label.propTypes = {
    activeClass: React.PropTypes.string.isRequired,
    onSelectLabel: React.PropTypes.func.isRequired,
    workTitle: React.PropTypes.string.isRequired,
}

export default Label;
