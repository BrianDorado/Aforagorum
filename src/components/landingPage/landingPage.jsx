import React, { Component } from 'react';
import './landingPage.css';

class LandingPage extends Component {
  componentDidMount(){
    console.log(process.env.REACT_APP_LOGIN);

  }
  render() {
    return (
      <div className="landingpage-container">
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="login-button">Login</button>
        </a>
      </div>
    );
  }
}

export default LandingPage;
