import { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/image/image.png";
import logo from "../assets/image/logo.png";
import dots from "../assets/image/Dots.png";
import rectangle from "../assets/image/Rectangle 26.png";
import box1 from "../assets/image/box1.jpg";
import box2 from "../assets/image/box2.png";
import box3 from "../assets/image/box3.png";
import aboutImage from "../assets/image/image (2).png";
import dots1 from "../assets/image/dots.png";
import frame2 from "../assets/image/frame 30.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 50 });
  }, []);

  return (
    <>
      <section className="hero section">
        <div className="hero-left" data-aos="fade-right">
          <h1>
            I'm a{" "}
            <span>
              <Typewriter
                options={{
                  strings: ["web designer and", "front-end developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                }}
              />
            </span>
          </h1>
          <p className="desc" data-aos="fade-up" data-aos-delay="200">
            I craft responsive websites where technologies meet creativity
          </p>
          <Link to="/contacts" data-aos="zoom-in" data-aos-delay="300">
            <button className="contact-btn">Contact me!!</button>
          </Link>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="status-box" data-aos="zoom-in" data-aos-delay="200">
            <span className="dot"></span> Currently working on
            <strong>Portfolio</strong>
          </div>
          <span className="logos" data-aos="zoom-in" data-aos-delay="300">
            <img src={logo} alt="" />
          </span>
          <span className="dots" data-aos="zoom-in" data-aos-delay="400">
            <img src={dots} alt="" />
          </span>
        </div>

        <div className="quote-box" data-aos="fade-up" data-aos-delay="500">
          <p>
            <span className="quote-mark">“</span> With great power comes great
            electricity bill
            <span className="quote-mark1">”</span>
          </p>
          <div className="quote-author">- Dr. Who</div>
        </div>
        <span className="rectangle" data-aos="zoom-in" data-aos-delay="600">
          <img src={rectangle} alt="" />
        </span>
      </section>

      {/* Projects Section */}
      <div className="section projects" data-aos="fade-up">
        <div className="project-heading">
          <div className="project-hdng-txt">
            <h1>Projects</h1>
            <div className="line"></div>
          </div>
          <div className="project-btn">
            <Link to="./works">
              View all <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div className="project-boxes">
          <div className="box" data-aos="zoom-in" data-aos-delay="100">
            <div className="boxImage">
              <img src={box1} />
            </div>
            <div className="boxText">
              <p className="p1">HTMl CSS JavaScript React</p>
              <h2>ChertNodes</h2>
              <p>Mine craft server hosting</p>
              <div className="box-btn">
                <button>Live </button>
                <button>Cached</button>
              </div>
            </div>
          </div>
          <div className="box box1" data-aos="zoom-in" data-aos-delay="200">
            <div className="boxImage">
              <img src={box2} />
            </div>
            <div className="boxText">
              <p className="p1">
                React Express Discord.js Node.js HTML SCSS Python Flask
              </p>
              <h2>ChertNodes</h2>
              <p>Mine craft server hosting</p>
              <div className="box-btn">
                <button>Live</button>
              </div>
            </div>
          </div>
          <div className="box box2" data-aos="zoom-in" data-aos-delay="300">
            <div className="boxImage">
              <img src={box3} />
            </div>
            <div className="boxText">
              <p className="p1">HTMl CSS JavaScript React</p>
              <h2>Kahoot Answers And Viewers</h2>
              <p>Mine craft server hosting</p>
              <div className="box-btn">
                <button>Live</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section section" data-aos="fade-up">
        <h2>Skills</h2>
        <span className="skill-border"></span>
        <div className="skills-layout">
          <div
            className="skills-shapes"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="dots1">
              <img src={dots1} />
            </div>
            <div className="frame27"></div>
            <div className="frame28"></div>
            <div className="frame30">
              <img src={frame2} />
            </div>
            <div className="logo1">
              <img src={logo} />
            </div>
          </div>

          <div className="skills-boxes">
            <div
              className="skill-box one"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Languages</h4>
              <p>
                TypeScript Lua
                <br />
                Python JavaScript
              </p>
            </div>
            <div
              className="skill-box two"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>Databases</h4>
              <p>
                SQLite PostgreSQL
                <br />
                Mongo
              </p>
            </div>
            <div
              className="skill-box three"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4>Tools</h4>
              <p>
                VSCode Neovim Linux
                <br />
                Figma XFCE Arch
                <br />
                Git Font Awesome
              </p>
            </div>
            <div
              className="skill-box four"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>Other</h4>
              <p>
                HTML CSS EJS SCSS
                <br />
                REST Jinja
              </p>
            </div>
            <div
              className="skill-box five"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h4>Frameworks</h4>
              <p>
                React Vue
                <br />
                Disnake Discord.js
                <br />
                Flask Express.js
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-me-section" data-aos="fade-left">
          <h2>About-me</h2>
          <span className="skill-border"> </span>
          <div className="about-layout">
            <div
              className="about-text"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>Hello, I’m'm Komal!</p>
              <p>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </p>
              <p>
                Transforming my creativity and knowledge into a website has been
                my passion for over a year. I have been helping various clients
                to establish their presence online. I always strive to learn
                about the newest technologies and frameworks.
              </p>
              <Link to="./about-me">
                <button>Read more ➔</button>
              </Link>
            </div>

            <div
              className="about-image"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={aboutImage} />
              <img src={dots1} className="dots4" />
              <img src={frame2} className="dots5" />
              <img src={dots1} className="dots6" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contacts-section" data-aos="fade-up">
          <h2>Contacts</h2>
          <span className="skill-border"> </span>
          <div className="contacts-layout">
            <div
              className="contact-text"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>
                I’m interested in freelance opportunities. However,
                <br />
                if you have other request or question, don’t
                <br />
                hesitate to contact me
              </p>
            </div>

            <div
              className="contact-box"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h4>Message me here</h4>
              <div className="contact-item">
                <div className="icon-placeholder">
                  <FaDiscord />
                </div>
                <span>komlaraza</span>
              </div>
              <div className="contact-item">
                <div className="icon-placeholder">
                  <MdMessage />
                </div>
                <span>komal@raza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
