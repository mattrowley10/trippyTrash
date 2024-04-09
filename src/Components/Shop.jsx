import React from "react";
import shopArray from "../Arrays/ShopArray";
import itemsArray from "../Arrays/ItemsArray";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Shop() {
  const nav = useNavigate();
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          shopArray.map((items) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = items.img;
            });
          })
        );
        setImgsLoaded(true);
      } catch {
        console.error("Failed to fetch images", error);
        setImgsLoaded(false);
      }
    };
    loadImages();
  }, []);

  return (
    <div className="shop flex flex-wrap space-x-0 justify-center">
      {imgsLoaded &&
        shopArray.map((shop, id) => {
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

      {imgsLoaded &&
        itemsArray.map((items, id) => {
          return (
            <div
              key={id}
              className="items flex flex-wrap  space-x-0 justify-center"
            >
              <div className="items-img-div mt-10 sm:ml-2 lg:ml-12">
                <img
                  src={items.img}
                  alt={items.alt}
                  className="items-img rounded-md shadow-black-500 cursor-pointer"
                  onClick={() => nav("/singleItem", { state: items })}
                />
                <div className="size-description">
                  <div className="ml-2 mt-2 text-left text-1xl">
                    ${items.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {!imgsLoaded && <div>Loading...</div>}
    </div>
  );
}
