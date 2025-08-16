import "../styles/about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dots1 from "../assets/image/dots.png";
import frame2 from "../assets/image/frame 30.png";
import aboutImage from "../assets/image/image (2).png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="about-section section">
        {/* About Me Section */}
        <div className="about-container">
          <div className="about-me" data-aos="fade-right">
            <h2 className="section-title">About-me</h2>
            <p className="subtitle">Who am I?</p>
            <p className="intro-text">Hello, I’m Komal!</p>
            <p className="about-text">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="about-text">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>

          <div className="about-image2" data-aos="fade-left">
            <img src={aboutImage} alt="About me" />
            <img src={dots1} className="dots7" alt="" />
            <img src={frame2} className="dots8" alt="" />
            <img src={dots1} className="dots9" alt="" />
            <div className="image-border"></div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills2">
          <h2 className="skills-heading" data-aos="fade-down">
            Skills
          </h2>
          <div className="skills-boxes2">
            <div className="skill-box2" data-aos="fade-up" data-aos-delay="100">
              <h4>Languages</h4>
              <p>TypeScript Lua</p>
              <p>Python JavaScript</p>
            </div>
            <div className="skill-box2" data-aos="fade-up" data-aos-delay="200">
              <h4>Other</h4>
              <p>HTML CSS EJS SCSS</p>
              <p>REST Jinja</p>
            </div>
            <div
              className="skill-box2 tools"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4>Tools</h4>
              <p>VSCode Neovim Linux</p>
              <p>Figma XFCE Arch</p>
              <p>Git Font Awesome</p>
              <p>KDE fish</p>
            </div>
            <div className="skill-box2" data-aos="fade-up" data-aos-delay="400">
              <h4>Databases</h4>
              <p>SQLite PostgreSQL</p>
              <p>Mongo</p>
            </div>
            <div className="skill-box2" data-aos="fade-up" data-aos-delay="500">
              <h4>Frameworks</h4>
              <p>React Vue</p>
              <p>Disnake Discord.js</p>
              <p>Flask Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
