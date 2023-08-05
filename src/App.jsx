import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PasswordRegister from "./Components/PasswordRegister";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import jwt from "jwt-decode";
import UserContext from "./Context/userContext";
import Account from "./Components/Account";
import Orders from "./Components/Orders";
export default function App() {
  React.useEffect(() => {
    checkLogin();
  }, []);
  const [user, setUser] = React.useState();
  const checkLogin = async () => {
    try {
      const token = await localStorage.getItem("token");
      const decoded = jwt(token);
      setUser(decoded);
    } catch (error) {}
  };
  return (
    <div className="main">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/register" element={<Register />} />
            <Route path="/password-register" element={<PasswordRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
