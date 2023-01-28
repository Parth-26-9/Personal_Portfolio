import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume</title>
  <link
    rel="shortcut icon"
    href="data:image/jpeg;base64,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"
    type="image/x-icon"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <div className="m-left-c1">
      <div className="img-section">
        <img
          src="https://lh3.googleusercontent.com/a/ALm5wu1IwuCZGc6ExBBSiRfSWMDLr_YyOP7tpReI8-qB=s360-p-rw-no"
          alt=""
        />
        <h1>Parth Bhatti</h1>
      </div>
      <div className="left-textpart">
        <div className="designer">
          <i className="fa-solid fa-suitcase" />
          <p>Designer</p>
        </div>
        <div className="london">
          <i className="fa-solid fa-house-chimney" />
          <p>London,UK</p>
        </div>
        <div className="email">
          <i className="fa-solid fa-envelope" />
          <p>ex@mail.com</p>
        </div>
        <div className="contact">
          <i className="fa-solid fa-phone" />
          <p>1233221232</p>
        </div>
        <div className="skills">
          <div className="skill">
            <i className="fa-solid fa-star-of-life" />
            <p>Skills</p>
          </div>
          <div className="text-skills">
            <div className="Adobe">
              <h3>Adobe Photoshop</h3>
              <p style={{ color: "black" }}>90%</p>
            </div>
            <div className="photo">
              <h3>Photography</h3>
              <p style={{ color: "black" }}>80%</p>
            </div>
            <div className="illu">
              <h3>Illustrator</h3>
              <p style={{ color: "black" }}>75%</p>
            </div>
            <div className="media">
              <h3>Media</h3>
              <p style={{ color: "black" }}>50%</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="lauguage">
            <i className="fa-solid fa-earth-americas" />
            <p>Languages</p>
          </div>
          <div className="text-skills">
            <div className="Adobe">
              <h3>English</h3>
              <p style={{ color: "rgb(6,158,158)" }}>90%</p>
            </div>
            <div className="photo">
              <h3>spanish</h3>
              <p style={{ color: "rgb(6,158,158)" }}>80%</p>
            </div>
            <div className="illu">
              <h3>German</h3>
              <p style={{ color: "rgb(6,158,158)" }}>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="m-right-c2">
      <div className="m-right-upper-c3">
        <div className="work">
          <i className="fa-solid fa-suitcase" />
          <h1>Work Experience</h1>
        </div>
        <div className="front">
          <p style={{ color: "black" }}>Front End Developer</p>
          <div className="front-cal">
            <i className="fa-regular fa-calendar-days" />
            <p>Jan 2015</p>
            <button>Current</button>
          </div>
          <div className="front-text">
            <p style={{ color: "black" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quod ad molestiae quis accusamus officia nam id dolore magni rem!
            </p>
          </div>
        </div>
        <div className="front">
          <p>Front End Developer</p>
          <div className="front-cal">
            <i className="fa-regular fa-calendar-days" />
            {/* <p>Jan 2015</p> */}
            <p>Mar 2012 - Dec 2014</p>
            {/* <button>Current</button> */}
          </div>
          <div className="front-text">
            <p style={{ color: "black" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quod ad molestiae quis accusamus officia nam id dolore magni rem!
            </p>
          </div>
        </div>
        <div className="front">
          <p style={{ color: "black" }}>Web Developer</p>
          <div className="front-cal">
            <i className="fa-regular fa-calendar-days" />
            <p>Jun 2010 - Mar 2012</p>
            {/* <button>Current</button> */}
          </div>
          <div className="front-text">
            <p style={{ color: "black" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quod ad molestiae quis accusamus officia nam id dolore magni rem!
            </p>
          </div>
        </div>
      </div>
      <div className="m-right-upper-c4">
        <div className="edu">
          <i className="fa-solid fa-school" />
          <h1>Education</h1>
        </div>
        <div className="second-part">
          <i className="fa-regular fa-calendar-days" />
          <p>Forever</p>
        </div>
        <div className="right-text2">
          <p style={{ color: "black" }}>
            Web Development all i need to know in our place
          </p>
        </div>
        <div className="sc">
          <div className="school">
            <p style={{ color: "grey" }}>London Business School</p>
            <div className="logo">
              <i className="fa-regular fa-calendar-days" />
              <p>2013-2015</p>
            </div>
            <p style={{ color: "black" }}>Master Degree</p>
          </div>
          <div className="school2">
            <p style={{ color: "grey" }}>School of Coding</p>
            <div className="logo">
              <i className="fa-regular fa-calendar-days" />
              <p>2010-2013</p>
            </div>
            <p style={{ color: "black" }}>Bachelor Degree</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default AboutMe