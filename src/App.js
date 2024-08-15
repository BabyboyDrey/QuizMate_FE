import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import Resultspage from "./pages/Resultspage/Resultspage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignupPage from "./pages/SignupPage/SignupPage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import ProtectedResultRoute from "./components/ProtectedResultRoute/ProtectedResultRoute.js"; // Import the new protected route

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={<HomePage />} />}
          ></Route>
          <Route
            path="/results"
            element={<ProtectedResultRoute element={<Resultspage />} />}
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
