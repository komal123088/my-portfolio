import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/footer.css";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });
  }, []);

  return (
    <>
      <div className="footer section" data-aos="fade-up">
        <div className="footer-left" data-aos="fade-right" data-aos-delay="100">
          <div className="icon-placeholder"></div>
          <div>
            <strong>Komal</strong> komalraza401@gmail.com
            <br />
            <span>Web designer and front-end developer</span>
          </div>
        </div>

        <div className="footer-right" data-aos="fade-left" data-aos-delay="200">
          <h4>Media</h4>
          <div className="social-icons">
            <div
              className="icon-placeholder"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <MdMessage />
            </div>
            <div
              className="icon-placeholder"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <FaDiscord />
            </div>
            <div
              className="icon-placeholder"
              data-aos="zoom-out"
              data-aos-delay="500"
            >
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2025. Made by Komal</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
