import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img src={LogoSubtitle} className="sub-logo" alt="logosub" />
    </Link>
    <NavLink exact="true" activeclassname="active" to="/">
      <FontAwesomeIcon icon={faHome} color="4d4d4e" />
    </NavLink>
    <NavLink
      exact="true"
      activeclassname="active"
      className="about-link"
      to="/about"
    >
      <FontAwesomeIcon icon={faUser} color="4d4d4e" />
    </NavLink>
    <NavLink
      exact="true"
      activeclassname="active"
      className="contact-link"
      to="/contact"
    >
      <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
    </NavLink>
  </div>
);

export default NavBar;
