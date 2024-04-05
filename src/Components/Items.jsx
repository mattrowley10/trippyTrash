import React from "react";
import { useNavigate } from "react-router-dom";
import itemsArray from "../Arrays/ItemsArray";

export default function Items() {
  const nav = useNavigate();
  return (
    <div className="items flex flex-wrap lg:space-x-12 space-x-0 justify-center">
      {itemsArray.map((items, id) => {
        return (
          <div key={id} className="">
            <div className="items-img-div mt-10">
              <img
                src={items.img}
                alt={items.alt}
                className="items-img rounded-md shadow-black-500 cursor-pointer"
                onClick={() => nav("/singleItem", { state: items })}
              />
              <div className="size-description">
                <div className="ml-2 mt-2 text-left text-1xl">
                  {items.price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
