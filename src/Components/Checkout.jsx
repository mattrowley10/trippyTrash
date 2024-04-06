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
            "ASAkTE75FgE6WQqs-hWRTdXuIxy0v2y2ISH9uJNq7zHzDmnqOqzpa7VOIm-OKapaO79YEI2DKVnEuu-A",
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
