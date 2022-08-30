import './index.scss';
import Loader from 'react-loaders';
import Logo from './Logo';
// import Profile from '../../../assets/images/profilereact.jpg';

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>

          <p>
            I'm a passionate full stack developer from Chicago, IL. I love
            learning about technology and spending time with my dog.
          </p>
          <p>
            Background in corporate IT account management where I have
            experience working with collaboration technologies, IoT, cloud &
            managed services, data center, and telecommunications.
          </p>
          <br></br>
          <p>
            <strong>Skills:</strong> JavaScript, ES6, HTML5, CSS3, jQuery, AJAX,
            Node.js, Express.js, React, MySQL, Sequelize, NoSQL, MongoDB,
            Mongoose, Postman, Insomnia, RESTful APIs and Server Side APIs
          </p>
        </div>
        <Logo />
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default About;
