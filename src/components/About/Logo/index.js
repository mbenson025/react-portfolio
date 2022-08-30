import './index.scss';
import Profile from '../../../assets/images/profilereact.jpg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={Profile} alt="Profile" />
    </div>
  );
};

export default Logo;
