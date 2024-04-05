import React from "react";
import { IoMdMenu } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function TopNav() {
  const [dropDown, setDropDown] = useState(false);
  const nav = useNavigate();
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nav]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropDownRef]);
  return (
    <div className="topNav flex">
      <p className="text-3xl cursor-pointer" onClick={() => nav("/")}>
        <img className="w-48 h-20" src="/Trippyfont 1.png" />
      </p>
      <div className="absolute right-0 mr-4 mt-4 inline-flex">
        <button className="text-4xl" onClick={toggleDropDown}>
          <IoMdMenu />
        </button>
        <button
          className="cart-button inline-flex text-2xl"
          onClick={() => nav("/cart")}
        >
          <BsCart />
        </button>
      </div>
      {dropDown && (
        <div
          ref={dropDownRef}
          className="dropDown px-4 py-2 absolute right-0 mt-10 rounded-lg mr-4 flex-column transition ease-in-out duration-500 cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <ul>
            <li className="mb-2" onClick={() => nav("/")}>
              <a>Home</a>
            </li>
            <li className="mb-2" onClick={() => nav("/shop")}>
              <a>Shop</a>
            </li>
            <li className="mb-2" onClick={() => nav("/clothing")}>
              <a>Clothing</a>
            </li>
            <li className="mb-2" onClick={() => nav("/items")}>
              <a>Items</a>
            </li>
            <li className="mb-2" onClick={() => nav("/cart")}>
              <a>Cart</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
