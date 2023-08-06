import React, { useEffect, useState } from "react";

import { TfiClose } from "react-icons/tfi";
import CartCounter from "./CartCounter";

export default function CartBox({
  img,
  title,
  brand,
  amount,
  handleAdd,
  counter,
  handleDeduct,
  handleOrder,
}) {
  return (
    <div className="container w-50 mb-3">
      <div className="shadow p-3 d-flex flex-row bg-light w-100">
        <img src={img} alt="" className="" height={200} />
        <div className="d-flex ms-auto">
          <div className="justify-content-center">
            <h6 className="fw-bold">{title}</h6>
            <p className="badge rounded-pill bg-warning text-dark"> {brand}</p>
            <div className="d-flex flex-column">
              <p className="fw-bold fs-5 ">
                $ {parseInt(amount) * parseInt(counter)}
              </p>
              <CartCounter
                counter={counter}
                handleAdd={handleAdd}
                handleDeduct={handleDeduct}
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-end justify-content-end w-auto ms-auto">
          <div className="btn btn-light shadow me-2">Details</div>
          <button className="btn btn-primary shadow me-3" onClick={handleOrder}>
            Order
          </button>
          <TfiClose size="25" className="mb-2 " />
        </div>
      </div>
    </div>
  );
}
