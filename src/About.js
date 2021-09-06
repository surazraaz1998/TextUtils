import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about">
          <div className="logo">
              <img src="dp.png" alt=""/>
          </div>
          <div className="about_info">
              <h1>Contact Me</h1>
              <ul>
                  <li>Github</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
              </ul>
          </div>
        </div>
    )
}

export default About
