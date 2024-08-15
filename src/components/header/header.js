import React from "react";
import logoImage from "../../assets/Logo Image.png";
import "./header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="nav-texts">
        <div>
          <h1>
            Study Smarter With <span>QuizMate</span> 🤝
          </h1>
        </div>

        <div>
          <h2>Instant answer for all assignments</h2>
        </div>
      </div>
      <div className="nav-empty"></div>
    </div>
  );
};

export default Header;
