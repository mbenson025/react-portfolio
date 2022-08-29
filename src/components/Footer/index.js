import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mbenson025"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mason-benson-6591b5102/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </div>
      <p>&copy; MB 2022 </p>
      {/* <a target="_blank" rel="noreferrer" href="https://github.com/mbenson025">
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a> */}
    </div>
  );
};

export default Footer;
