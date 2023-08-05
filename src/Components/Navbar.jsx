import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../Context/userContext";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link
          className="navbar-brand  fw-bolder active"
          aria-current="page"
          to="/"
        >
          Winter Hood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fw-bolder active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item d-flex flex-row">
              <span className="pt-2 ps-2 ">
                <FiShoppingCart size="30" />
              </span>
              <Link className="nav-link fw-bold" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item d-flex flex-row">
              <span className="pt-2 ps-2 ">
                <MdOutlineAccountCircle size="30" />
              </span>
              {user && (
                <Link className="nav-link fw-bold" to="/orders">
                  Orders
                </Link>
              )}
              {!user && (
                <Link className="nav-link fw-bold" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
