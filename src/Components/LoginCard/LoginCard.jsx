import React, { useState } from "react";
import "./LoginCard.css"; // Import CSS file for styling
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

function LoginCard({ onClose }) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupMode, setSignupMode] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form state
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are filled
    if (loginEmail.trim() === "" || loginPassword.trim() === "") {
      setLoginError(true);
      return;
    }
    // Your login logic goes here
    setLoginSuccess(true); // Simulate login success
    setShowMessage(true); // Show login success message
    setLoginError(false); // Reset login error
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Check if all signup fields are filled
    if (
      signupFirstName.trim() === "" ||
      signupEmail.trim() === "" ||
      signupPassword.trim() === "" ||
      signupConfirmPassword.trim() === ""
    ) {
      setSignupError(true);
      return;
    }
    // Check if passwords match
    if (signupPassword !== signupConfirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    // Your signup logic goes here
    console.log("Signup successful");
    setSignupSuccess(true); // Simulate signup success
    setShowMessage(true); // Show signup success message
    // Redirect to home page or perform necessary action
    // For now, let's simulate a page reload
    window.location.reload();
  };

  const toggleSignupMode = () => {
    setSignupMode(!signupMode);
    setShowMessage(false); // Hide any message when switching between sign-in and sign-up
    setShowPassword(false); // Reset password visibility when switching
  };

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h2>{signupMode ? "Sign Up" : "Sign In"}</h2>
        {showMessage && (
          <p>{signupMode ? "Signup successful! 😊" : "Login successful! 😊"}</p>
        )}
        <span className="close-icon" onClick={onClose}>
          <AiOutlineClose />
        </span>
        {signupMode ? (
          <form onSubmit={handleSignupSubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={signupFirstName}
              onChange={(e) => setSignupFirstName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <label>Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} />
              ) : (
                <AiOutlineEye onClick={() => setShowPassword(true)} />
              )}
            </div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
            {signupError && <p>Please fill all fields</p>}
            {passwordMatchError && <p>Passwords do not match</p>}
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} />
              ) : (
                <AiOutlineEye onClick={() => setShowPassword(true)} />
              )}
            </div>
            {loginError && <p>Please fill in both fields</p>}
            <button type="submit">Sign In</button>
          </form>
        )}
        <p>
          {signupMode ? "Already have an account? " : "Don't have an account? "}
          <span className="toggle-signup" onClick={toggleSignupMode}>
            {signupMode ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
