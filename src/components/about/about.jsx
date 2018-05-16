import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <section className="about-text">
        <strong>What is it?</strong>
        <br />
        <p>AforaGorum is a travel based forum aimed at connecting like minded world travelers so that they can share experiences, locations and advice with each other. </p>
      </section>
      <br />
      <section className="about-text">
        <strong>The name</strong>
        <p>"AforaGorum" is mix of the words Forum and Agora. A forum being a public place to meet and greet people. </p>
      </section>
      <br />
      <section className="about-text">
        <strong>The future</strong>
        <p>
          This project is mostly nothing
        </p>
        <p>
          In its current state this app is just a test of some basic functionality. There are many things that are being
          worked on currently and many many more that are planned for the future. This 'app' is currently barely even in
          what you could call alpha. At this point all the data is 'dummy' data. To get a better idea of data flow how
          to correctly process information from multiple users
          <br />
          <br />
          <br />
          <br />
        </p>
      </section>
      <br />
    </div>
  );
};

export default About;