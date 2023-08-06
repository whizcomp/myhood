import React, { useEffect } from "react";
import OrderBox from "./OrderBox";
import blue from "../assets/blue.png";
import axios from "axios";

export default function Orders() {
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    const res = await axios.get("http://localhost/winter-hood/getOrders.php/9");
    console.log(res);
  };
  return (
    <div className="pb-3">
      <h1
        className="title text-uppercase fw-bolder fs-4 text-center py-3"
        data-aos="fade-up"
      >
        <span>My Orders</span>
      </h1>
      <OrderBox amount="700" status="delivered" title="blue hood" img={blue} />
      <OrderBox amount="200" status="shipping" title="blue hood" img={blue} />
    </div>
  );
}
