import React, { useState } from "react";
import CartCounter from "./CartCounter";

export default function ShopBox({ title, price, image, addToCart }) {
  const [items, setItems] = useState(false);
  const addCart = () => {
    setItems(true);
    addToCart();
  };
  return (
    <div>
      <div className="shadow me-3 p-2 d-flex flex-column">
        <img src={image} alt="" height="200" />
        <div className="d-flex flex-column">
          <p className="fw-bold text-nowrap">{title}</p>
          <p>{price}</p>
          {items ? (
            <button className="btn btn-success" onClick={addCart} disabled>
              Added to Cart
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              style={{ backgroundColor: "tomato" }}
              onClick={addCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
