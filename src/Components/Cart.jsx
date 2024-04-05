import { useContext } from "react";
import CartContext from "../Hooks/CartContext.jsx";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Cart() {
  const { removeFromCart, cart } = useContext(CartContext);

  if (cart == 0) {
    return (
      <div className="nothing-cart flex justify-center pt-10 text-2xl">
        There's nothing in your cart! Visit the shop to add some items...
      </div>
    );
  }

  return (
    <div className="cart flex flex-wrap lg:space-x-12 justify-center">
      {cart.map((items, index) => {
        return (
          <div key={index}>
            <div className="cart-img-div mt-10">
              <img
                className="cart-img rounded-md"
                src={items.img}
                alt={items.alt}
              />
              <div className="size-description">
                <div className="ml-2 mt-2 text-left text-1xl">
                  Size {items.size}
                </div>
                <div className="ml-2 text-left">{items.price}</div>
                <div
                  className="mr-2 left-52 w-44 relative bottom-12 border-4 border-black px-4 bg-white cursor-pointer"
                  onClick={() => removeFromCart(items)}
                >
                  Remove From Cart
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
