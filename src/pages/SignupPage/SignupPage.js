import React, { useState } from "react";
import Header from "../../components/header/header";
import "./SignupPage.css";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !password) {
      toast.error("All fields are required");
      return;
    }

    const user = {
      email,
      firstName,
      lastName,
      password,
    };

    try {
      const res = await axios.post(
        `https://quizmate-backend.onrender.com/api/user/sign-up`,
        user,
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        // Store the token in localStorage
        localStorage.setItem("userToken", res.data.token);

        toast.success("Sign-up successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
      console.error(err);
    }
  };

  return (
    <div>
      <Header />

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="text-container">
            <h3>Sign Up!</h3>
          </div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoFocus
            type="text"
            placeholder="Enter your email"
          />
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder="Enter your first name"
          />
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Enter your last name"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
