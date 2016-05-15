import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import data from './data.json';
import scrollAnimation from './components/animations/scrollHandler';
import labelAnimation from './components/animations/label';
// import LabelsContainer from './containers/LabelsContainer';
import Label from './components/Label.js';
import Project from './components/Project';

require('../less/index.less');

class PortfolioContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.selected
        }
    }

    handleClick(index, event) {
        event.preventDefault();

        this.setState({
            selected: index
        })
    }

    componentDidMount() {
        labelAnimation();
    }

    _renderLabels() {
        return this.props.projectData.map((result, index) => {
            const activeClass = this.state.selected === index ? 'label__link active' : 'label__link';

            return (
                <Label
                    key={ index }
                    activeClass={ activeClass }
                    onSelectLabel={ this.handleClick.bind(this, index) }
                    workTitle={ this.props.projectData[index].label } />
            )
        })
    }

    _renderProjects() {
        return this.props.projectData.map((result, index) => {
            return (
                <Project
                    key={ index }
                    selected={ this.state.selected }
                    index={ index }
                    projectData={ result } />
            )
        })
    }

    render() {
        return (
            <div>
                <div className='tabs__labels'>
                    { this._renderLabels() }
                </div>
                <div>
                    { this._renderProjects() }
                </div>
            </div>
        );
    }
}
//
// <LabelsContainer
//     onSelectLabel={ this.handleClick.bind(this, index) }
//     projectData={ this.props.projectData }
//     selected={ this.state.selected }/>
//


PortfolioContainer.defaultProps = {
    selected: 0,
    projectData: data.work,
    isLoading: true
 }

render(<PortfolioContainer />, document.getElementById('portfolio'));
