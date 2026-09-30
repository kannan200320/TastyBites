import React from "react";
import "../style/OrderSuccess.css";

function OrderSuccess({ closeOrder }) {
  return (
    <div className="success-overlay">
      <div className="success-box">
        <div className="success-icon">✓</div>

        <h3>Order Placed Successfully!</h3>

        <p>
          Thank you for ordering with TastyBites.
          Your food will arrive soon!
        </p>
        <button onClick={closeOrder}>Close</button>
      </div>
    </div>
  );
}
export default OrderSuccess;