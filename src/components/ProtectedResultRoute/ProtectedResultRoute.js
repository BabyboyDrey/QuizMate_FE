import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedResultRoute = ({ element }) => {
  const submissionResponse = localStorage.getItem("submissionResponse");
  const token = localStorage.getItem("userToken");

  if (!submissionResponse || !token) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedResultRoute;
