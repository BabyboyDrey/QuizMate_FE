import React, { useState } from "react";
import Header from "../../components/header/header";
import "./LoginPage.css";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    await axios
      .post(`https://quizmate-backend.onrender.com/api/user/login`, user, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          console.log("res", res);
          localStorage.setItem("userToken", res.data.token);

          toast.success("Login successful!");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        } else {
          toast.error("Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "An error occurred");
      });
  };

  return (
    <div>
      <Header />

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="text-container">
            <h3>Welcome back! 🫶</h3>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            type="text"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
