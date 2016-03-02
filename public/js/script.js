import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Tabs from './components/tabs.js';
import Pane from './components/panes.js'

class Portfolio extends Component {
    render() {
    const content = {
        jgHomefeed: {
            label: 'JustGiving Feed',
            url: 'www.justgiving.com',
            imagePath: './images/jghomefeed.jpg',
            title: "Justgiving's social feed",
            description: "I've been working as the sole FE resource on the feed, building the different UI elements. I work with around 10 colleagues in a cross-functional team of designers, developers and analysts."
        },
        kalComms: {
            label: 'Kaleidoscope Communcations',
            url: 'kaleidoscopecommunications.com',
            imagePath: './images/kalcomms.jpg',
            title: "A communications consultancy",
            description: "I implemented the design and build of the site. The aim was to describe the company, provide information and testimonials relating to their work and direct users to get in touch."
        },
        HeavenSentCards: {
            label: 'Heaven Sent Cards',
            url: 'heavensentcards.com',
            imagePath: './images/hscgallery.jpg',
            title: "An e-commerce postcard website",
            description: "I was responsible for the management and build of the website along with two other developers and a designer. The website has a gallery to display postcards and also an option to buy them via Paypal."
        },
    }

    return (
      <div>
        <Tabs selected={0}>
          <Pane label={content.jgHomefeed.label}>
            <div className='work__container'>
              <img className='work__image' src={content.jgHomefeed.imagePath}/>
              <div className='work-summary'>
                <a href="https://www.justgiving.com" className='work-url'>{content.jgHomefeed.url}</a>
                <div className='work-title'>{content.jgHomefeed.title}</div>
                <div className='work-description'>{content.jgHomefeed.description}</div>
              </div>
            </div>
          </Pane>
          <Pane label={content.kalComms.label}>
            <div className='work__container'>
              <img className='work__image' src={content.kalComms.imagePath}/>
              <div className='work-summary'>
                <div className='work-url'>{content.kalComms.url}</div>
                <div className='work-title'>{content.kalComms.title}</div>
                <div className='work-description'>{content.kalComms.description}</div>
              </div>
            </div>
          </Pane>
          <Pane label={content.HeavenSentCards.label}>
            <div className='work__container'>
              <img className='work__image' src={content.HeavenSentCards.imagePath}/>
              <div className='work-summary'>
                <div className='work-url'>{content.HeavenSentCards.url}</div>
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
