import React, { useContext, useState } from "react";
import CartBox from "./CartBox";
import UserContext from "../Context/userContext";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../Context/cartContext";
import axios from "axios";
export default function Cart(props) {
  const { cartList, setCatList } = useContext(CartContext);
  // console.log(cartList);
  const { user, setUser } = useContext(UserContext);
  const [counter, setCounter] = useState(1);
  const handleAdd = (cart) => {
    const newList = [...cartList];
    const index = newList.findIndex((list) => list.id == cart.id);
    const newObj = newList[index];
    newObj.items = newObj.items + 1;

    setCatList(newList);
  };
  const handleDeduct = (cart) => {
    const newList = [...cartList];
    const index = newList.findIndex((list) => list.id == cart.id);
    const newObj = newList[index];
    newObj.items = newObj.items - 1;
    setCatList(newList);
  };
  const handleOrder = async (cart) => {
    //orderid.userid,status,items,amount,email
    const { id, amount, items } = cart;
    const { id: userId, email } = user;
    try {
      const ans = await axios.post("http://localhost/winter-hood/orders.php", {
        cart_id: id,
        user_id: userId,
        status: 1,
        items,
        amount,
        email,
      });
      console.log(ans);
      if (ans.status == 200) {
        const newList = [...cartList];

        const final = newList.filter((list) => list.id !== cart.id);
        setCatList(final);
      } else {
        console.log(ans);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h1 className="title text-uppercase fw-bolder fs-4 text-center py-3">
        <span>
          My Cart <FiShoppingCart />
        </span>
      </h1>
      {cartList.map((cart) => (
        <CartBox
          img={cart.img}
          title={cart.title}
          brand={cart.company}
          amount={cart.amount}
          handleAdd={() => handleAdd(cart)}
          counter={cart.items}
          handleDeduct={() => handleDeduct(cart)}
          handleOrder={() => handleOrder(cart)}
        />
      ))}
    </div>
  );
}
