import { Link } from 'react-router-dom';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Mason Benson</h1>
          <h2> Full Stack Developer </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Home;
