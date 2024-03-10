import React, { useState } from "react";
import "./WebCssFiles/Home.css";
import { Link } from "react-router-dom";
import { GiPoloShirt } from "react-icons/gi";
import { TbMichelinBibGourmand } from "react-icons/tb";
import HomeVideo from "./RealArtistImages/HomeImg/Home.mp4";
import LoginCard from './LoginCard/LoginCard';

function Home() {

  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    // Container for the home section
    <div className="home-container">
      <div className="home-content">
        <div className="para-home">
          <p>New In Style BuddyGo</p>
        </div>
        {/* Text and video content side by side */}
        <div className="content-wrapper">
          {/* Text content section */}
          <div className="text-content-home">
            {/* Title section */}
            <div className="title">
              {/* Paragraph for "New In Style BuddyGo" */}
            </div>

            {/* Heading and paragraph content */}
            <div className="heading-text">
              <h2>Limited Edition</h2>
              <span>Made With Quality</span>
              <div className="paragraph">
                {/* Individual paragraphs describing fashion */}
                <p>
                  Fashion Is From Self Expression And <br />
                  autonomy For a certain period fashion describe the expression
                  of
                  <br />
                  self and increase self confidence
                </p>
              </div>

              {/* Shop button */}
              <div className="home-btn">
                <Link to="/collection">
                  <button className="shopping-bag">
                    Shop On BuddyGo <GiPoloShirt />
                  </button>
                </Link>

                
                  <button className="login" onClick={toggleLogin}>
                    Login & Sign Up <TbMichelinBibGourmand />
                  </button>
      
              </div>
            </div>
          </div>

          {/* Video content section */}
          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source src={HomeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {showLogin && <LoginCard onClose={toggleLogin} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
