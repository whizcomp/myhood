import React from "react";
import CartBox from "./CartBox";
import adidas from "../assets/red_black.png";
import blue from "../assets/blue.png";
import grey from "../assets/grey.png";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  return (
    <div className="">
      <h1 className="title text-uppercase fw-bolder fs-4 text-center py-3">
        <span>
          My Cart <FiShoppingCart />
        </span>
      </h1>
      {/* img,title,brand,amount */}
      <CartBox
        img={adidas}
        title="A red and black adidas"
        brand="adidas"
        amount="20"
      />
      <CartBox
        img={blue}
        title="A blue yellow magenta hood"
        brand="pokemon"
        amount="18"
      />
      <CartBox img={grey} title="A grey  hood" brand="Nike" amount="18" />
    </div>
  );
}
