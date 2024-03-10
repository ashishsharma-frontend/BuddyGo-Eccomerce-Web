// Import React and useState from the React library
import React, { useState } from "react";
import "./WebCssFiles/Unsed.css";
import { CiBag1 } from "react-icons/ci";
import MonkeyLogo from "./RealArtistImages/NavBarImg/Man.png";

// Import the CSS file for styling
import "./WebCssFiles/Navbar.css";
import { Link } from "react-router-dom";

// Define a functional component called Navbar
const Navbar = () => {
  // Define a state variable `navOpen` and a function to update it `setNavOpen`
  const [navOpen, setNavOpen] = useState(false);

  // Define a function to toggle the navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // JSX structure for the Navbar component
  return (
    <div className={`nav ${navOpen ? "sticky" : ""}`}>
      <div className="nav-container">
        {/* Navbar with conditional classes based on the `navOpen` state */}
        <div className={`navbar ${navOpen ? "navbar-open" : ""}`}>
          {/* Logo section with conditional classes */}
          <div className={`logo ${navOpen ? "logo-open" : ""}`}>
            <Link to="/">
              <span>BuddyGo</span>
            </Link>
            <div className="logo-img">
              <Link to="/">
                {" "}
                <img src={MonkeyLogo} alt="" />
              </Link>
            </div>
          </div>
          {/* Menu toggle button */}
          <div className="menu-cart">
            <div className="menu-toggle" onClick={toggleNav}>
              {/* Animated lines for the toggle button */}
              <div className={navOpen ? "homeBox homeBoxOpen" : "homeBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
            <div className="shopping-cart">
              <Link to="/">
                <CiBag1 />
              </Link>{" "}
            </div>
          </div>
        </div>

        {/* Navigation overlay with transition effects */}
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s", // Delay transition
          }}
        >
          {/* Navigation links with transition delays */}
          <ul className="nav-links">
            <li className="nav-item">
              {/* Link to Home with transition */}
              <Link
                to="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Home
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to About Me with transition */}
              <Link
                to="/about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                About Me
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to Collection with transition */}
              <Link
                to="/collection"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Collection
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            {/* Additional navigation items go here */}
          </ul>

          {/* Footer section with location and social media links */}
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0",
              }}
            >
              <span>Gwalior, Bharat India</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.2s" : "0",
                    }}
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0",
                    }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0",
                    }}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Navbar component
export default Navbar;
