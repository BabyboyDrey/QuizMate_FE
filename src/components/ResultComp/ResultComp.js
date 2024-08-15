import React, { useEffect, useState } from "react";
import "./ResultComp.css";
import { IoExpand } from "react-icons/io5";

const ResultComp = () => {
  const [resultData, setResultData] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Retrieve the data from localStorage when the component mounts
    const storedData = localStorage.getItem("submissionResponse");
    if (storedData) {
      // Parse the stored JSON data
      const parsedData = JSON.parse(storedData);
      // Set the `result` key's value into the state
      setResultData(parsedData.result || "No result found"); // Fallback if `result` is undefined
    }
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="outer-results-container">
      <div
        className={`inner-results-container ${isExpanded ? "expanded" : ""}`}
      >
        <h4 className={isExpanded ? "expanded-text" : ""}>{resultData}</h4>
        <div className="expand-container" onClick={handleExpandClick}>
          <h5>
            <IoExpand className="expand-icon" />
            Expand
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ResultComp;
