import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext.jsx";
import { useEffect } from "react";

export default function SingleItem() {
  const location = useLocation();
  const nav = useNavigate();
  const shop = location.state || {};
  const { addToCart, cart } = useContext(CartContext);
  console.log(cart);

  const pushToCart = () => {
    addToCart(shop);
    if (location.state && location.state.type.includes("shop")) {
      nav("/shop");
    } else if (location.state && location.state.type.includes("clothing")) {
      nav("/clothing");
    } else {
      nav("/items");
    }
  };

  console.log(location.state);
  return (
    <div className="singleItem lg:flex sm:flex-wrap md:flex-wrap lg:flex-nowrap">
      <img className="single-item-img" src={shop.img} alt={shop.alt} />
      <ul className="description-div xl:ml-32 lg:my-24 md:mx-12 sm:mx-24 flex-column">
        <li className="text-5xl mb-10">{shop.price}</li>
        <li className="text-2xl mb-10 font-black">{shop.alt}</li>
        <li className="text-left mt-10 ">{shop.description}</li>
        <br></br>
        <li>
          <button
            className="border-4 border-black px-4 bg-white"
            onClick={() => pushToCart()}
          >
            Add To Cart
          </button>
        </li>
      </ul>
    </div>
  );
}
