import './index.scss';
import LogoS from '../../../assets/images/mblogo2.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="S" />
    </div>
  );
};

export default Logo;
