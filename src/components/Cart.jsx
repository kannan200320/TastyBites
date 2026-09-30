import React from "react";
import "../style/cart.css";

function Cart({
  cartItems,
  cartTotal,
  updateQuantity,
  removeItem,
  closeCart,
  checkout,
}) {
  return (
    <div className="cart-overlay">
      <div className="cart-background" onClick={closeCart}></div>
      <div className="cart-panel">
        <div className="cart-header">

          <h3>🛍️ Your Cart</h3>

          <button onClick={closeCart}>
            ✕
          </button>
        </div>

        <div className="cart-items">

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div>🛍️</div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <h4>{item.name}</h4>

                  <p>
                    $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>

                <div className="quantity">

                  <button
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="delete-button"
                  onClick={() => removeItem(item.id)}
                >
                  🗑️
                </button>

              </div>

            ))

          )}

        </div>

        {cartItems.length > 0 && (

          <div className="cart-footer">

            <div className="total">
              <span>Total Amount:</span>

              <strong>
                ${cartTotal.toFixed(2)}
              </strong>
            </div>

            <button
              className="checkout-button"
              onClick={checkout}
            >
              Checkout Now
            </button>

          </div>

        )}

      </div>
    </div>
  );
}
export default Cart;