import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader"; // Import the loader component
import "./inputComp.css";

const InputComp = () => {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(file);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (image || inputText) {
      setLoading(true); // Show the loader
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }
      if (inputText) {
        formData.append("prompt", inputText);
      }

      axios
        .post(
          "https://quizmate-backend.onrender.com/api/user/gpt-prompt",
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          localStorage.setItem(
            "submissionResponse",
            JSON.stringify(response.data)
          );

          toast.success("Submission successful!");

          window.location.href = "/results";
        })
        .catch((error) => {
          toast.error(
            error.response?.data?.message ||
              "Submission failed. Please try again."
          );
          console.error("An error occurred:", error);
        })
        .finally(() => {
          setLoading(false); // Hide the loader after the request completes
        });
    } else {
      toast.error("Please provide an image or text to submit.");
    }
  };

  return (
    <div className="input-comp-container">
      {loading && <Loader />} {/* Show loader when loading */}
      {!loading && (
        <React.Fragment>
          {" "}
          {/* Hide the form when loading */}
          <div className="instruct-texts-tab">
            <div className="instruct-text">
              <h3>Scan your questions from an image</h3>
            </div>
            <div className="instruct-tab">
              <div className="active-instruct-tab">Misc</div>
              <div className="inactive-instruct-tab">Math</div>
            </div>
          </div>
          <div
            className="image-draggable-field-container"
            style={{ display: inputText ? "none" : "flex" }}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {!image && (
              <div>
                <IoImageOutline className="image-icon" />
              </div>
            )}
            <div className="drag-text">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="uploaded-image-preview"
                />
              ) : (
                "Drag image or click here to upload"
              )}
            </div>
            <input type="file" name="file" onChange={handleChange} />
          </div>
          <div
            className="submit-button-container2"
            style={{ display: image ? "flex" : "none" }}
          >
            <button onClick={handleSubmit}>Solve</button>
          </div>
          <div
            className="or-type-container"
            style={{ display: image || inputText ? "none" : "flex" }}
          >
            <h3>Or type...</h3>
          </div>
          <div
            className="text-input-container"
            style={{ display: image ? "none" : "flex" }}
          >
            <input
              type="text"
              placeholder="Type your question here"
              onChange={handleInputChange}
            />
            <div className="submit-button-container">
              <button onClick={handleSubmit}>Solve</button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default InputComp;
