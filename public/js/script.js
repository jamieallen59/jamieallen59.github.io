import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Tabs from './components/tabs.js';
import Pane from './components/panes.js'

class Portfolio extends Component {
  render() {
    let content = {
      jgHomefeed: {
        url: 'www.justgiving.com',
        imagePath: './images/jghomefeed.jpg',
        title: "Justgiving's logged in homepage, a social feed.",
        description: "This displayes social content related to users. It is a relatively large Angular application. I worked as the sole front end resource in the team resonsible for the feed, creating all the UI elements"
      },
      jgServicesDashboard: {
        label: 'JG Services Dashboard',
        url: 'No website available yet',
        imagePath: './images/placeholder.jpg',
        title: "Nowt here",
        description: ""
      },
      kalComms: {
        label: 'Kal. Comms',
        url: 'kaleidoscopecommunications.com',
        imagePath: './images/kalcomms.jpg',
        title: "A communications consultancy website",
        description: ""
      },
      HeavenSentCards: {
        label: 'HeavenSentCards',
        url: 'heavensentcards.com',
        imagePath: './images/hscgallery.jpg',
        title: "An e-commerce postcard website",
        description: ""
      },
    }

    return (
      <div>
        <Tabs selected={0}>
          <Pane label='JG Homefeed'>
            <div className='work__container'>
              <img className='work__image' src={content.jgHomefeed.imagePath}/>
              <div className='work-summary'>
                <div className='work-title'>{content.jgHomefeed.url}</div>
                <div className='work-title'>{content.jgHomefeed.title}</div>
                <div className='work-description'>{content.jgHomefeed.description}</div>
              </div>
            </div>
          </Pane>
          <Pane label="JG services dashboard">
            <div className='work__container'>
              <img className='work__image' src={content.jgServicesDashboard.imagePath}/>
              <div className='work-summary'>
                <div className='work-title'>{content.jgServicesDashboard.url}</div>
                <div className='work-title'>{content.jgServicesDashboard.title}</div>
                <div className='work-description'>{content.jgServicesDashboard.description}</div>
              </div>
            </div>
          </Pane>
          <Pane label="Kal. Comms">
            <div className='work__container'>
              <img className='work__image' src={content.kalComms.imagePath}/>
              <div className='work-summary'>
                <div className='work-title'>{content.kalComms.url}</div>
                <div className='work-title'>{content.kalComms.title}</div>
                <div className='work-description'>{content.kalComms.description}</div>
              </div>
            </div>
          </Pane>
          <Pane label="HeavenSentCards">
            <div className='work__container'>
              <img className='work__image' src={content.HeavenSentCards.imagePath}/>
              <div className='work-summary'>
                <div className='work-title'>{content.HeavenSentCards.url}</div>
                <div className='work-title'>{content.HeavenSentCards.title}</div>
                <div className='work-description'>{content.HeavenSentCards.description}</div>
              </div>
            </div>
          </Pane>
        </Tabs>
      </div>
    );
  }
}

render(<Portfolio />, document.getElementById('portfolio'));
