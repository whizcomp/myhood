import React, { useState } from "react";

export default function ShopBox({ title, price, image }) {
  const [items, setItems] = useState(0);
  return (
    <div>
      <div className="shadow me-3 p-2 d-flex flex-column">
        <img src={image} alt="" height="200" />
        <div className="d-flex flex-column">
          <p className="fw-bold">{title}</p>
          <p>{price}</p>
          {items === 0 ? (
            <button
              className="btn btn-secondary"
              style={{ backgroundColor: "tomato" }}
            >
              Add to Cart
            </button>
          ) : (
            <div className=" d-flex ">
              <span className="box ">-</span>
              <div className="box__center pt-3 ms-auto me-auto">
                <p>1</p>
              </div>
              <span className="box ">+</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
