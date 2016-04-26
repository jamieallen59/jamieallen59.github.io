import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import data from './data.json'
import PortfolioContainer from './containers/PortfolioContainer.js'
import scrollAnimation from './components/animations/scrollHandler.js'

require('../less/index.less');

const Portfolio = () => {
    return (
        <div>
            <PortfolioContainer work={ data.work } />
        </div>
    )
}

render(<Portfolio />, document.getElementById('portfolio'));
