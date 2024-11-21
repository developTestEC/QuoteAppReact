import React from 'react';
import '../App.scss';

function About() {
  return (
        <section className="about-section">
          <h2>About QuoteApp</h2>
          <div className="about-content">
            <img src="https://images.pexels.com/photos/8184216/pexels-photo-8184216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Person reading in a library" className="about-image" />
            <div className="about-text">
              <p>
                QuoteApp is a platform dedicated to providing users with access to a diverse range of book quotes.
                Our mission is to inspire and engage readers through meaningful and memorable words extracted from
                literary works. We strive to create a user-friendly experience with a focus on authenticity, creativity,
                and connection to the world of literature.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </section>
  );
}

export default About;