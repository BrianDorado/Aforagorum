import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <section className="homepage-header">
          <nav className="homepage-nav">
            <a href="" className="home-nav-links">
              Profile
            </a>
            <a href="" className="home-nav-links">
              Search user
            </a>
            <a href="" className="home-nav-links">
              Create Post
            </a>
            <a href="" className="home-nav-links">
              Bios Hostage Virus
            </a>
          </nav>
        </section>
        <section className="homepage-display" />
      </div>
    );
  }
}

export default HomePage;
//  view profile, view followers, search for user, create post, display messages,
//
