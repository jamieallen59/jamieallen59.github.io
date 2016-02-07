import React, { Component, PropTypes } from 'react';

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
  }

  handleClick(index, event) {
    event.preventDefault();

    this.setState({
      selected: index
    })
  }

  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');

      return (
        <li key={index}>
          <a href='#'
             className={activeClass}
             onClick={ this.handleClick.bind(this, index) }>
            { child.props.label }
          </a>
        </li>
      )
    }
    return (
      <ul className='tabs__labels'>
        { this.props.children.map(labels.bind(this)) }
      </ul>
    )
  }

  _renderContent() {
    return (
      <div className='tabs__content'>
        { this.props.children[this.state.selected] }
      </div>
    )
  }

  render() {
    return (
      <div className='tabs'>
        { this._renderTitles() }
        { this._renderContent() }
      </div>
    );
  }
}

// Tabs.propTypes = { selected: React.PropTypes.number }
Tabs.defaultProps = { selected: 0 }

export default Tabs;
