import './index.scss';
import LogoMB from '../../../assets/images/mblogo2.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoMB} alt="MB" />
    </div>
  );
};

export default Logo;
