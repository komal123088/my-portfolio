import "../styles/contacts.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaTwitter } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import dots1 from "../assets/image/dots.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="contact-section section">
        <h2 data-aos="fade-down">Contacts</h2>

        <div
          className="contact-me-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="para">
            <p>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>

          <div className="contact-section-box">
            <div
              className="contact-section-box1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Support me here</h3>
              <p>79482583498284</p>
            </div>
            <div
              className="contact-section-box1 message"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Message me here</h3>
              <p>
                <FaTwitter /> Komal#45454
              </p>
              <p>
                <MdMessage /> komalraza@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="all-media" data-aos="fade-up" data-aos-delay="400">
          <h3>All Media</h3>
          <div className="icons">
            <span>
              <FaTwitter /> @komal343
            </span>
            <span>
              <FaTwitter /> @komalraza98
            </span>
          </div>
        </div>

        <span data-aos="zoom-in" data-aos-delay="500">
          <img className="contact-dots" src={dots1} alt="dots decoration" />
        </span>
      </div>
    </>
  );
};

export default Contact;
