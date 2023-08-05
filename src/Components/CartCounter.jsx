import React from "react";

export default function CartCounter() {
  return (
    <div className="d-flex flex-row">
      <button className="btn btn-warning me-2">-</button>
      <span className="pt-2">1</span>
      <button className="btn btn-warning ms-2">+</button>
    </div>
  );
}
