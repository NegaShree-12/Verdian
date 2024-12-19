import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Veridian from '../assets/images/veridian.png'; // Import the Veridian image

import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleHomeClick = () => {
    scroll.scrollToTop(); 
  };

  return (
    <nav className="navbar">
      <div className={`navbar-icon ${menuOpen ? 'responsive-icon' : ''}`}>
        <img src={Veridian} alt="Veridian" className="veridian-image" />
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a
          onClick={handleHomeClick}
          className="nav-link"
          style={{ cursor: 'pointer' }}
        >
          Home
        </a>
        <Link
          to="about-us"
          className="nav-link"
          smooth={true}
          duration={500}
          offset={-90}
        >
          About Us
        </Link>
        <Link
          to="our-team"
          className="nav-link"
          smooth={true}
          duration={500}
          offset={-80}
        >
          Our Team
        </Link>
        <Link
          to="investment-approach"
          className="nav-link"
          smooth={true}
          duration={500}
          offset={-80}
        >
          Investment Approach
        </Link>
        <Link
          to="contact-us"
          className="nav-link"
          smooth={true}
          duration={500}
          offset={-80}
        >
          Contact Us
        </Link>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
