import React, { Component } from 'react';
import './landingPage.css';
import About from '../about/about';

class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage-container">
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="login-button">Login</button>
        </a>
        <section>
          <strong>About</strong>
          <br />
          <br />
          <About />
        </section>
      </div>
    );
  }
}

export default LandingPage;
