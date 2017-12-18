import React, { Component } from 'react';
import './landingPage.css'


class LandingPage extends Component {
    render() {
        return ( 
          <div className='landingpage-container'>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login-button'>Login</button>
                        {console.log()}
                    </a>
            </div>
        );
    }
}

export default LandingPage;