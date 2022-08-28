import './index.scss';
import Loader from 'react-loaders';

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Contact;
