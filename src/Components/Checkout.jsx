import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const { totalAmount } = location.state;

  console.log(totalAmount);

  return (
    <div className="payPal-buttons flex justify-center mt-20">
      <PayPalScriptProvider
        options={{
          clientId:
            "AQEZR-xS3o3UCFssJc3__lfOVjtGeu8jsbotU_mSp9f2Nyu4lf3eWTUdArngK5qUzoTldxn8zQd7PEgd",
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
              });
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}
