import './index.scss';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="App">
        <NavBar />;
        <div className="page">
          <span className="tags top-tags"></span>

          <Outlet />

          <span className="tags bottom-tags">
            <span className="bottom-tag-html"></span>
          </span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
