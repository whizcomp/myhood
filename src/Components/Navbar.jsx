import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          Winter Hood
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav  ms-auto  mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link fw-bolder active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item d-flex flex-row">
              <span className="pt-2 ps-2 ">
                <FiShoppingCart size="30" />
              </span>
              <Link class="nav-link fw-bold" to="/cart">
                Cart
              </Link>
            </li>
            <li class="nav-item d-flex flex-row">
              <span className="pt-2 ps-2 ">
                <MdOutlineAccountCircle size="30" />
              </span>
              <Link class="nav-link fw-bold" to="/login">
                account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
