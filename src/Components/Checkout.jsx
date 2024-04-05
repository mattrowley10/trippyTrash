import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  return (
    <div className="payPal-buttons flex justify-center mt-60">
      <PayPalScriptProvider
        options={{
          clientId:
            "ASAkTE75FgE6WQqs-hWRTdXuIxy0v2y2ISH9uJNq7zHzDmnqOqzpa7VOIm-OKapaO79YEI2DKVnEuu-A",
        }}
      >
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
  );
}
