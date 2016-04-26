import React, { Component, PropTypes } from 'react';

import labelAnimation from '../components/animations/label.js';
// import ProjectsContainer from './ProjectsContainer.js';
import Label from '../components/Label.js';
import Project from '../components/Project.js';

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

    render() {
        return (
            <div>
                <div className='tabs__labels'>
                    { this.props.work.map((result, index) => {
                        const activeClass = (this.state.selected === index
                            ? 'label__link active'
                            : 'label__link');

                        return (
                            <Label
                                key={ index }
                                activeClass={ activeClass }
                                onSelectLabel={ this.handleClick.bind(this, index) }
                                workTitle={ this.props.work[index].label } />
                        )
                    })}
                </div>
                <div>
                    { this.props.work.map((result, index) => {
                        return (
                            <Project
                                key={ index }
                                selected={ this.state.selected }
                                index={ index }
                                projectData={ result } />
                        )
                    }) }
                </div>
            </div>
        );
    }
}

PortfolioContainer.defaultProps = { selected: 0 }

PortfolioContainer.propTypes = {
    work: PropTypes.array.isRequired
}

export default PortfolioContainer;
