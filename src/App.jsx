import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PasswordRegister from "./Components/PasswordRegister";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/register" element={<Register />} />
          <Route path="/password-register" element={<PasswordRegister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
