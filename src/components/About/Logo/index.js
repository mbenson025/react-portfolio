import './index.scss';
import Profile from '../../../assets/images/profilereact.jpg';

const Logo = () => {
  return (
    <div className="profile-container">
      <img className="solid-profile" src={Profile} alt="Profile" />
    </div>
  );
};

export default Logo;
