import React, { useContext } from "react";
import adidas from "../assets/adidas_red.png";
import pokemon from "../assets/pokemon.png";
import nike from "../assets/nike_hood.png";
import adidas2 from "../assets/red_black.png";
import jordan from "../assets/jordan.png";
import ShopBox from "./ShopBox";
import AOS from "aos";
import CartContext from "../Context/cartContext";

export default function Company({ data }) {
  React.useEffect(() => {
    AOS.init();
    const sortedData = [...data].filter((hood) => hood.brand == true);
    setItems(sortedData);
  }, []);
  const [items, setItems] = React.useState([]);
  const { cartList, setCatList } = useContext(CartContext);
  const cart = (hood) => {
    const updatedCart = [...cartList, hood]; // Add the new 'hood' item to the cart using spread operator
    setCatList(updatedCart);
  };
  return (
    <div className="pb-3">
      <h1
        className="title text-uppercase fw-bolder fs-4 text-center py-3"
        data-aos="slide-up"
      >
        <span>Hoods from Leading Brands</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex " data-aos="slide-up">
              {items.map((hood) => (
                <ShopBox
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
