import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";

export default function Checkout() {
  const location = useLocation();
  const nav = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  const { totalAmount } = location.state;

  console.log(totalAmount);

  return (
    <div className="payPal-buttons flex justify-center mt-20">
      <PayPalScriptProvider
        options={{
          clientId:
            "ATA0W2m04gRXDMCv_mE2OE-DwvK8n9zpdliUaa0iaUY2-arILWM9aQODhl3TrkwagYgXseSm6U5Shcv8",
        }}
      >
        <div>
          <h2 className="text-center mb-12 text-2xl">
            Total Amount: ${totalAmount}
          </h2>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount.toFixed(2),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function (details) {
                console.log(
                  "Transaction Completed by " + details.payer.name.given_name
                );
                cart.forEach((item) => {
                  removeFromCart(item);
                });
                nav("/");
              });
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}
