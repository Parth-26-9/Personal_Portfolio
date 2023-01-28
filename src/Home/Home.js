import React, { useRef, useState } from "react";
import "./Home.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Typical from "react-typical";
import { Sling as Hamburger } from "hamburger-react";
import Media from "react-media";
import {Link} from 'react-router-dom'
function Home() {
    const [showMediaIcons,SetShowMediaIcons]=useState(false);
    // const headingPart = document.getElementById('heading-part')
    // const web = document.getElementById('web')
    // const middleText = document.getElementById('middle-text')
    // const endButton = document.getElementById('end-button-section')
  return (
    <>
    <div className="MyContainer" id="MyContainer">
      <div className={showMediaIcons ? "left-part responsive-part": "left-part"}>
        {/* <div className="left-part-upper responsive-part-upper"> */}
          <div className={showMediaIcons ? "left-part-upper responsive-part-upper":"left-part-upper"}>
          <img
            src="https://cdn.dribbble.com/users/434375/screenshots/16829581/media/e1ec0140cea1d0d17428c74e4dccce7c.jpg?compress=1&resize=400x300&vertical=top"
            width="95%"
            height="100%"
            alt=""
          />
          <h2 className="logo-text">Parth</h2>
          <p className="logo-text2">Web Developer</p>
        </div>
        {/* <div className="left-part-middle-section responsive-part-middle-section"> */}
          <div className={showMediaIcons ? "left-part-middle-section responsive-part-middle-section":"left-part-middle-section"}>
          <div className="blank-section"></div>
          <div className="blank-section-home">
            <h3><Link to="/home">Home</Link></h3>
          </div>
          <div className="blank-section-skills">
            <h3>Skills</h3>
          </div>
          <div className="blank-section-project">
            <h3>Projects</h3>
          </div>
          <div className="blank-section-aboutme">
            <h3>About Me</h3>
          </div>
          <div className="blank-section-contact">
            <h3>Contact</h3>
          </div>
          <div className="social-media">
            <AiFillLinkedin className="linkdin" />
            <AiFillGithub className="github" />
          </div>
        </div>
      </div>
      <div className="right-part"> 
        <div id="hamburger-menu" onClick={()=>{
          SetShowMediaIcons(!showMediaIcons);
        }}>
          <Hamburger
            size={50}
            direction={"right"}
            duration={1}
            distance="lg"
            color="#4FD1C5"
            easing="ease-in"
          />
        </div>
        <div className="heading-part" id="heading-part">
          <h1>Hi</h1>
          <h1>
            I'm <span className="parth">Parth,</span>
          </h1>
          <h2>
            <span className="web" id="web">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Programmer 🧑‍💻",
                  1000,
                  "Web Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  "BCA Student",
                  1000,
                ]}
              />
            </span>
          </h2>
        </div>
        <div className="middle-text" id="middle-text">
          <p>Front End Developer</p>
        </div>
        <div className="end-button-section" id="end-button-section">
          <button>
            <div className="left"></div>
            Contact Me!
            <div className="right"></div>
          </button>
        </div>
      </div>
    </div>
    </>
);
}

export default Home;
