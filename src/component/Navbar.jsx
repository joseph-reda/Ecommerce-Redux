import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/Icon1.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 py-2 px-20 bg-black text-white max-sm:px-2">
      <ul className="flex justify-between items-center gap-10">
        <li>
          <Link to="/cartPage">Add To Cart</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div>
        <Link to="/cartPage">
          <img
            src={icon}
            alt="cart"
            className="w-[40px] h-[40px] rounded-full bg-black cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
