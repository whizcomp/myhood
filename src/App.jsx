import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PasswordRegister from "./Components/PasswordRegister";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import jwt from "jwt-decode";
import UserContext from "./Context/userContext";
import Orders from "./Components/Orders";
import adidas from "./assets/adidas_red.png";
import pokemon from "./assets/pokemon.png";
import nike from "./assets/nike_hood.png";
import adidas2 from "./assets/red_black.png";
import jordan from "./assets/jordan.png";
import green from "./assets/green.png";
import grey from "./assets/grey.png";
import tshirt from "./assets/tshirt.png";
import CartContext from "./Context/cartContext";

export default function App() {
  React.useEffect(() => {
    checkLogin();
  }, []);
  const [user, setUser] = React.useState();
  const [cartList, setCatList] = useState([]);
  const checkLogin = async () => {
    try {
      const token = await localStorage.getItem("token");
      const decoded = jwt(token);
      setUser(decoded);
    } catch (error) {}
  };
  const hoods = [
    {
      id: 1,
      title: "Red Hood",
      company: "Adidas",
      amount: "30",
      img: adidas,
      brand: false,
      items: 1,
    },
    {
      id: 2,
      title: "Black and red Hood",
      company: "Adidas",
      amount: "30",
      img: adidas2,
      brand: true,
      items: 1,
    },
    {
      id: 3,
      title: "Blue pokemon Hood",
      company: "pokemon",
      amount: "70",
      img: pokemon,
      brand: true,
      items: 1,
    },
    {
      id: 4,
      title: "Jordan Hood",
      company: "Jordan",
      amount: "40",
      img: jordan,
      brand: true,
      items: 1,
    },
    {
      id: 5,
      title: "Nike Hood",
      company: "Nike",
      amount: "100",
      img: nike,
      brand: true,
      items: 1,
    },
    {
      id: 6,
      title: "Grey Hood",
      company: "Nike",
      amount: "60",
      img: grey,
      brand: false,
      items: 1,
    },
    {
      id: 7,
      title: "Green Hood",
      company: "Nike",
      amount: "100",
      img: green,
      brand: true,
      items: 1,
    },
  ];
  return (
    <div className="main">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider value={{ cartList, setCatList }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home data={hoods} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password-register" element={<PasswordRegister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </CartContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
