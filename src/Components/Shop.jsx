import React, { useContext } from "react";

import ShopBox from "./ShopBox";
import AOS from "aos";
import CartContext from "../Context/cartContext";

export default function Shop({ data }) {
  React.useEffect(() => {
    AOS.init();
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    const res = sortedData.filter((hood) => hood.id <= 5);
    setItems(res);
  }, []);
  const { cartList, setCatList } = useContext(CartContext);
  const [items, setItems] = React.useState([]);
  const cart = (hood) => {
    const updatedCart = [...cartList, hood]; // Add the new 'hood' item to the cart using spread operator
    setCatList(updatedCart);
  };
  return (
    <div className="py-5">
      <h1
        className="title text-uppercase fw-bolder fs-4 text-center py-3"
        data-aos="fade-up"
      >
        <span>Shop For your favourite Hood</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex " data-aos="fade-up">
              {items.map((hood) => (
                <ShopBox
                  key={hood.id}
                  title={hood.title}
                  price={` $${hood.amount}`}
                  image={hood.img}
                  addToCart={() => cart(hood)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
