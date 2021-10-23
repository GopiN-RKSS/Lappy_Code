import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./HeaderCart.css";

function HeaderCart() {
  return (
    <>
      <div className="rounded-3 rounded-pill bg-info px-3 py-2">
        <span>
          <ShoppingCartIcon />
        </span>
        <span className="ms-2 text-white">Your Cart</span>
        <span className="ms-2 text-white rounded-3 rounded-pill bg-danger px-3 py-1">
          3
        </span>
      </div>
    </>
  );
}

export default HeaderCart;
