import React, { Component, PropTypes } from 'react';

// import labelAnimation from './animations/label.js';
import Pane from './Panes.js';

class Tabs extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         selected: this.props.selected
    //     }
    // }

    // handleClick(index, event) {
    //     event.preventDefault();
    //
    //     this.setState({
    //         selected: index
    //     })
    // }

    // componentDidMount() {
    //     labelAnimation();
    // }

    _renderTitles() {
        function labels( child, index ) {
            let activeClass = (this.state.selected === index ? 'label__link active' : 'label__link');

            return (
                <div className="label" key={ index }>
                    <a href='#'
                        className={ activeClass }
                        onClick={ this.handleClick.bind( this, index ) }>
                        { this.props.work[index].label }
                    </a>
                </div>
            )
        }
        return (
            <div className='tabs__labels'>
                { this.props.work.map(labels.bind( this )) }
            </div>
        )
    }

    render() {
        return (
            <div>
                { this._renderTitles() }
                { this.props.work.map(( result, index ) => {
                    let showWork = index === this.state.selected
                        ? 'tabs__content'
                        : 'tabs__content dont-display';

                    const { imageClass, url, title, description, imageName } = result;
                    let fullImageClass = "work__image " + imageClass;

                    let grabImage = (imageName) => {
                        return require('../../images/' + imageName )
                    }

                    let portfolioImage = document.createElement('img');
                    portfolioImage.src = grabImage(imageName);

                    return (
                        <div className={ showWork } key={ index }>
                            <Pane
                                imageClass={ fullImageClass }
                                imageUrl={ portfolioImage.src }
                                url={ url }
                                title={ title }
                                description={ description } />
                        </div>
                    )
                }) }
            </div>
        );
    }
}

// Tabs.propTypes = {
//     work: React.PropTypes.array
// }

// Tabs.defaultProps = { selected: 0 }

export default Tabs;
