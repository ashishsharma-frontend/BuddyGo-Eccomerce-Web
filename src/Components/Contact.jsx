import React, { useState } from "react";
import PropTypes from "prop-types";
import { TfiInstagram } from "react-icons/tfi";
import { GiOldKing } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";
import "./WebCssFiles/Unsed.css";
import "./WebCssFiles/Contact.css"; // Corrected the file path
import King from "./RealArtistImages/HomeImg/King.webp";

function Contact() {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Join");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(""); // Clear error message on email change
  };

  const handleJoinClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setButtonText("Joining..."); // Update button text
    try {
      // Simulate sending email message (replace with actual logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setButtonText("Successfully");
      console.log("Email sent and user joined successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonText("Join"); // Reset button text on error
    }
  };


  return (
    // Container for the contact section
    <div className="contact-container">
      <div className="contact-content">
        {/* Border element for visual separation */}
        <div className="border"></div>
        <div className="footer-img">
          <img src={King} alt="" />
        </div>
        {/* Title for the contact section */}
        <div className="contact-title">
          <h1>
            Join The <span>BuddyGo</span> Fashion Community{" "}
          </h1>
        </div>

        {/* Paragraph for additional information */}
        <div className="contact-para">
          <p>One More Step Into The World Of Our Fashion .</p>
        </div>

        {/* Email input and join button section */}
        <div className="enter-email">
          <input
            type="email"
            placeholder="Email"
            className="custom-input"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="contact-button" onClick={handleJoinClick}>
            Join <GiOldKing />
          </div>
        </div>

        {/* Display error message if there is one */}
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Border element for visual separation */}
        <div className="border"></div>

        {/* Social media links section */}
        <div className="social-media">
          {/* Instagram link */}
          <div className="instagram">
            <span>
              <TfiInstagram />
            </span>{" "}
            <a href="#">Instagram</a>
          </div>

          {/* Twitter link */}
          <div className="twitter">
            <span>
              <BsTwitterX />
            </span>{" "}
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes for type validation
Contact.propTypes = {
  // Define your prop types here
};

export default Contact;
