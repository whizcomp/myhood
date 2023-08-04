import React from "react";
import { TfiClose } from "react-icons/tfi";

export default function CartBox({ img, title, brand, amount }) {
  return (
    <div className="container w-50 mb-3">
      <div className="shadow p-3 d-flex flex-row bg-light w-100">
        <img src={img} alt="" className="" height={200} />
        <div className="d-flex ms-auto">
          <div className="justify-content-center">
            <h6 className="fw-bold">{title}</h6>
            <p className="badge rounded-pill bg-warning text-dark"> {brand}</p>
            <div className="d-flex flex-column">
              <p className="fw-bold fs-5 ">$ {amount}</p>
              <div className="d-flex flex-row">
                <button className="btn btn-warning me-2">-</button>
                <span className="pt-2">1</span>
                <button className="btn btn-warning ms-2">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-end justify-content-end w-auto ms-auto">
          <div className="btn btn-light shadow me-2">Details</div>
          <div className="btn btn-primary shadow me-3">Order</div>
          <TfiClose size="25" className="mb-2 " />
        </div>
      </div>
    </div>
  );
}
