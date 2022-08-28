import './index.scss';
import Loader from 'react-loaders';

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>

          <p>
            I'm a passionate full stack developer from Chicago, IL. In my free
            time I like to going hiking with my dog.
          </p>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default About;
