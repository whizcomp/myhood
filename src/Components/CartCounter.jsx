import React, { useEffect, useState } from "react";

export default function CartCounter({ counter, handleDeduct, handleAdd }) {
  //
  return (
    <div className="d-flex flex-row">
      <button
        className="btn btn-warning me-2"
        disabled={counter == 1 ? true : false}
        onClick={handleDeduct}
      >
        -
      </button>
      <span className="pt-2 ms-auto me-auto">{counter}</span>
      <button className="btn btn-warning ms-2" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
