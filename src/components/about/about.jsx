import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <section className="about-text">
          <strong>What is it?</strong>
          <br />
          <h1>
            If you are like me and have done a fair amount of travelling. You have done the Eiffel Tower, the colosseum,
            the Tower of London several times over. That is all.
          </h1>
        </section>
        <br />
        <section className="about-text">
          <strong>How does it work?</strong>

          <p>
            Figure it out, tutorials are for noobs
            <br />
            Its fishing, its not that hard. He is a grown man and can figure it out himself
          </p>
        </section>
        <br />
        <section className="about-text">
          <strong>The future</strong>
          <p>
            Please be aware that this project is currently under going renovation. Many features are going to be
            adjusted, removed or introduced.
          </p>
          <p>
            In its current state this app is just a test of some basic functionality. There are many things that are
            being worked on currently and many many more that are planned for the future. This 'app' is currently barely
            even in what you could call alpha. At this point all the data is 'dummy' data. To get a better idea of data
            flow how to correctly process information from multiple users
            <br />
            <br /> In the future I
            <br />
            <br /> You can find a list of all functionality being worked on currently and upcoming{' '}
            <a href="http://">here</a>. There will also be a changelog you can view.
          </p>
        </section>
        <br />
      </div>
    );
  }
}

export default About;

//add liking system, reporting system, language and username fiter, view recent post, favorite post, add admin view,
// trip advisor api, google maps api, yelp api, post tags(mui chips) eg- food-america-small/town, natural language grammer corrector
// post img, message notifications, follow abilities, followed post notifications, reply notifications, reply to replies
