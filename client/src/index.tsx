import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Utils/AuthContext";
import React from "react";
import "./index.css";

//Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
