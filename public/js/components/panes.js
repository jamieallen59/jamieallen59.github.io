import React, { Component, PropTypes } from 'react';



let image = 0;
let title = 1;
let description = 2;

class Pane extends Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Pane;
