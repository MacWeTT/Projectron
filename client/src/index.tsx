import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Utils/AuthContext";
import React from "react";
import "./index.css";

import PrivateRoutes from "./Utils/PrivateRoutes";

//Pages
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
