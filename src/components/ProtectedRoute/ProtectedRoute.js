import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("userToken");

  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  return element;
};

export default ProtectedRoute;
