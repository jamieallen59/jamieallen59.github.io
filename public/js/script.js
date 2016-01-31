import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Tabs from './components/tabs.js';
import Pane from './components/panes.js'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
}

render(<Portfolio />, document.getElementById('portfolio'));
