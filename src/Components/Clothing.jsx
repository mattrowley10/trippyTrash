import React from "react";
import shopArray from "../Arrays/ShopArray";
import { useNavigate } from "react-router-dom";

export default function Clothing() {
  const nav = useNavigate();
  return (
    <div className="clothing flex flex-wrap space-x-0 justify-center">
      {shopArray.map((shop, id) => {
        return (
          <div key={id} className="">
            <div className="shop-img-div mt-10 sm:ml-2 lg:ml-12">
              <img
                className="shop-img rounded-md shadow-black-500 cursor-pointer"
                src={shop.img}
                alt={shop.description}
                onClick={() => nav("/singleItem", { state: shop })}
              />
              <div className="size-description">
                <div className="ml-2 mt-2 text-left text-1xl">
                  Size {shop.size}
                </div>
                <div className="ml-2">${shop.price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
