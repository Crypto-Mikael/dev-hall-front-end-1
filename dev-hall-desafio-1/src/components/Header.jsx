import React from 'react';
import '../styles/Header.css';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h3>MeuFreela</h3>
      <div className="icons">
        <FaLinkedinIn>
          <a href="https://www.linkedin.com/in/miguel-costa-campos/">link</a>
        </FaLinkedinIn>
        <FaInstagram>
          <a href="https://www.instagram.com/">link</a>
        </FaInstagram>
        <FaTwitter>
          <a href="https://twitter.com/">link</a>
        </FaTwitter>
      </div>
    </header>
  );
}

export default Header;
