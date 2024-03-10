import React from "react";
import "./WebCssFiles/About.css";
import "./WebCssFiles/Unsed.css";
import { IoEarthSharp } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { CgUserlane } from "react-icons/cg";
import { DiYeoman } from "react-icons/di";
import AboutImg from "./RealArtistImages/AboutImg/AboutOne.jpg";

function About() {
  return (
    // Container for the about section
    <div className="about-container">
      {/* Border element for visual separation */}
      <div className="border"></div>

      {/* Main heading for the about section */}
      <div className="main-heading">
        <h2>The About</h2>
      </div>

      {/* Content section for about */}
      <div className="about-content">
        {/* Content side containing about heading and mission */}
        <div className="content-side">
          {/* Heading for the about content */}
          <div className="about-heading">
            <h2>We Are Changing</h2>
            <h2>The Way Things</h2>
            <h2>Get Made .</h2>
          </div>

          {/* Mission section with an icon and text */}
          <div className="mission">
            {/* Icon and text for the mission */}
            <div className="icon-text">
              <span>
                <IoEarthSharp />
              </span>
              <h2>My Mission</h2>
            </div>

            {/* Mission description */}
            <p>
              We Are On A Mission TO Empower creative Independence In A
              Commercial World And Incredible
            </p>
          </div>
        </div>

        {/* Image side containing about image and name */}
        <div className="image-side">
          {/* Image for the about section */}
          <img src={AboutImg} alt="" />
          {/* Name associated with the about image */}
          <h2>Ashish Sharma</h2>
        </div>
      </div>

      <div className="why-chose">
        <div className="heading">
          <h2>
            Why You <span>Chose</span>
            <br /> Us
          </h2>
        </div>
        <div className="para">
          <p>
            Where style meets sophistication, elegance meets comfort, and
            premium design meets your wardrobe. Elevate your fashion game with
            our exquisite collection of luxury clothing and accessories.
            Discover the essence of timeless style with Buddy Go.
          </p>
        </div>

        <div className="chose-box">
          <div className="chose-card">
            <span className="icon">
              {" "}
              <FaFire />
            </span>
            <span className="chose-text">
              {" "}
              <h2>Best Quality</h2>
              <p>Our Services Is The Best</p>
            </span>
          </div>

          <div className="chose-card">
            <span className="icon">
              <DiYeoman />
            </span>
            <span className="chose-text">
              {" "}
              <h2>Trusted By Brand</h2>
              <p>The Lots Of Brand Trust Us</p>
            </span>
          </div>

          <div className="chose-card">
            <span className="icon">
              <CgUserlane />
            </span>
            <span className="chose-text">
              {" "}
              <h2>Costumer Satisfaction</h2>
              <p>100% Costumers Like Our Product </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
