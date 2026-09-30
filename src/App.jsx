import React, { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import OrderSuccess from "./components/OrderSuccess";
import Footer from "./components/Footer";

import "./style/global.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (food) => {

    const existingItem = cartItems.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {

        if (item.id === food.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...food,
          quantity: 1,
        },
      ]);

    }
    showMessage(food.name + " added to cart!");
  };
  const updateQuantity = (id, change) => {

    const updatedCart = cartItems
      .map((item) => {

        if (item.id === id) {

          const newQuantity =
            item.quantity + change;

          if (newQuantity > 0) {
            return {
              ...item,
              quantity: newQuantity,
            };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const showMessage = (text) => {

    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const checkout = () => {

    setCartItems([]);
    setIsCartOpen(false);
    setIsOrderPlaced(true);
  };

  return (
    <div className="app">

      {message && (
        <div className="toast">
          ✓ {message}
        </div>
      )}

      <Header
        cartCount={cartCount}
          openCart={() => setIsCartOpen(true)}
      />

      <Hero />

      <Menu
        addToCart={addToCart}
      />
      <About />
      <Contact
        showMessage={showMessage}
      />

      <Footer />
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          cartTotal={cartTotal}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          closeCart={() => setIsCartOpen(false)}
          checkout={checkout}
        />
      )}

      {isOrderPlaced && (
        <OrderSuccess
          closeOrder={() => setIsOrderPlaced(false)}
        />
      )}
    </div>
  );
}
export default App;