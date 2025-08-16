import "../styles/works.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import box1 from "../assets/image/box1.jpg";
import box2 from "../assets/image/box2.png";
import box3 from "../assets/image/box3.png";
import box5 from "../assets/image/box5.png";
import mywebsite from "../assets/image/mywebsite.png";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="works section">
        <h2 data-aos="fade-down">Projects</h2>
        <p data-aos="fade-down" data-aos-delay="100">
          List of my projects
        </p>

        <div className="apps">
          <h3 data-aos="fade-right">
            Complete <span>Apps</span>
          </h3>
          <div className="project-boxes">
            <div className="box" data-aos="fade-up" data-aos-delay="100">
              <div className="boxImage" data-aos="zoom-in">
                <img src={box1} alt="ChertNodes" />
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

            <div className="box box1" data-aos="fade-up" data-aos-delay="200">
              <div className="boxImage" data-aos="zoom-in">
                <img src={box2} alt="ChertNodes" />
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

            <div className="box box2" data-aos="fade-up" data-aos-delay="300">
              <div className="boxImage" data-aos="zoom-in">
                <img src={box3} alt="Kahoot Answers" />
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

            <div className="box box3" data-aos="fade-up" data-aos-delay="400">
              <div className="boxImage" data-aos="zoom-in">
                <img className="myborder" src={mywebsite} alt="Portfolio" />
              </div>
              <div className="boxText">
                <p className="p1">Komal Portfolio</p>
                <h2>Vue TS Less </h2>
                <p>Portfolio</p>
                <p>You're Using it rn</p>
                <div className="box-btn">
                  <button>Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="works-projects-section">
          <h2 data-aos="fade-down">Small-projects</h2>

          <div className="works-projects-grid">
            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <p className="works-project-type">Discord.js TS JS</p>
              <h3>Bot boilerplate</h3>
              <p className="works-project-desc">
                Start creating scalable discord.js bot with typescript in
                seconds
              </p>
              <button className="works-project-btn">Github ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p className="works-project-type">VUE CSS JS</p>
              <h3>My blog</h3>
              <p className="works-project-desc">
                Front-end of my future blog website written in vue
              </p>
              <button className="works-project-btn">Github ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <p className="works-project-type">Figma</p>
              <h3>Chess pro</h3>
              <p className="works-project-desc">
                Figma landing page about service for viewing chess tournaments
              </p>
              <button className="works-project-btn">Figma ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <p className="works-project-type">Figma</p>
              <h3>Crash protect website</h3>
              <p className="works-project-desc">
                Figma template for website about anti-raid, anti-crash discord
                bot
              </p>
              <button className="works-project-btn">Figma ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <p className="works-project-type">HTML CSS</p>
              <h3>CSS experiments</h3>
              <p className="works-project-desc">
                Collection of my different little projects in css
              </p>
              <button className="works-project-btn">Live ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <p className="works-project-type">Lua NeoVim</p>
              <h3>Web Dev nvim config</h3>
              <p className="works-project-desc">
                Config for neovim perfect for web developer
              </p>
              <button className="works-project-btn">Github ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <p className="works-project-type">Python Quart HTML</p>
              <h3>Ooku</h3>
              <p className="works-project-desc">
                Simple link shortener with auth
              </p>
              <button className="works-project-btn">Live ⤳</button>
            </div>

            <div
              className="works-project-card"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <p className="works-project-type">Figma</p>
              <h3>School website</h3>
              <p className="works-project-desc">
                Figma template website for my school
              </p>
              <button className="works-project-btn">Figma ⤳</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
