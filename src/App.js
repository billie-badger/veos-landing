import React, { Component } from 'react';
import logo from './assets/Veos_Logo_Horizontal.svg';
import kickstarter from './assets/Kickstarter_Logo.png';
import wordpress from './assets/WP.svg';
import facebook from './assets/FB.svg';
import instagram from './assets/IG.svg';
import twitter from './assets/Twitter.svg';
import pinterest from './assets/Pinterest.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className='white-bg' />
        <div className='content'>
          <img className='logo' src={logo} alt='logo'/>
          <p>We create quality material and design-driven clothing
          <br />
with socially-driven messages and concepts, promoting unification and community.
          </p>
          <div className='kickstarter'>
            <h3>Now on</h3>
            <img src={kickstarter} width='200px' height='25px' alt='kickstarter'/>
          </div>
          <div className='support'>
            <a href='https://www.kickstarter.com/projects/1274085873/veos-apparel-inc?ref=nav_search&result=project&term=veos' target='_blank' rel='noopener noreferrer'>SUPPORT NOW</a>
          </div>
          <p className='follow'>Our site will be up soon. Meanwhile, follow our journey on our blog and social media!</p>
          <div className='social'>
            <a href='https://wordpress.com' target='_blank' rel='noopener noreferrer'>
              <img src={wordpress} alt='wordpress'/>
            </a>
            <a href='https://www.facebook.com/veosapparel/' target='_blank' rel='noopener noreferrer'>
              <img src={facebook} alt='facebook'/>
            </a>
            <a href='https://www.instagram.com/veosapparel/?hl=en' target='_blank' rel='noopener noreferrer'>
              <img src={instagram} alt='instagram'/>
            </a>
            <a href='https://twitter.com/VeosApparel' target='_blank' rel='noopener noreferrer'>
              <img src={twitter} alt='twitter'/>
            </a>
            <a href='https://www.pinterest.com/veosapparel/?eq=veos%20app&etslf=5220' target='_blank' rel='noopener noreferrer'>
              <img className='pinterest' src={pinterest} alt='pinterest'/>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
