import React from 'react';
import '../pages/AboutUs.css';

const AboutUsCard = ({ title, description, icon }) => {
  return (
    <div className="about-us-card">
  {/* Card Content */}
  <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
  
  {/* Icon Wrapper */}
  <div className="icon-wrapper">
    <div className="icon-background"></div> {/* Background box */}
    <div className="card-icon">{icon}</div> {/* Icon stays on top */}
  </div>
</div>

  );
};

export default AboutUsCard;


