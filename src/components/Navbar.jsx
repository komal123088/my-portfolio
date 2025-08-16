import "../styles/navbar.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mylogo1 from "../assets/image/1.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });
  }, []);

  return (
    <nav className="navbar section" data-aos="fade-down">
      {/* Logo */}
      <div className="logo" data-aos="zoom-in" data-aos-delay="100">
        <span>
          <img src={mylogo1} alt="logo" />
        </span>
        <h3>Komal</h3>
      </div>

      {/* Toggle Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li data-aos="fade-up" data-aos-delay="200">
          <Link to="/">Home</Link>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <Link to="/works">Works</Link>
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <Link to="/about-me">About-me</Link>
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
