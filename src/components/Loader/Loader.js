import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="outer-svg-container">
      <div className="inner-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="214"
          height="214"
          style={{
            shapeRendering: "auto",
            display: "block",
            background: "rgb(255, 255, 255)",
            background: "none",
          }}
        >
          <g>
            <circle
              strokeDasharray="141.37166941154067 49.12388980384689"
              r="30"
              strokeWidth="10"
              stroke="#9d69ff"
              fill="none"
              cy="50"
              cx="50"
            >
              <animateTransform
                keyTimes="0;1"
                values="0 50 50;360 50 50"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"
              />
            </circle>
          </g>
        </svg>
        <div className="first-text-container">
          <h5>Processing your request</h5>
        </div>
      </div>
      <div className="second-text-container">
        <h5>here come your answers 🤙</h5>
      </div>
    </div>
  );
};

export default Loader;
