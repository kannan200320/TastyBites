import React, { useState } from "react";
import FoodCard from "./FoodCard";
import menuData from "../data/menuData";
import "../style/menu.css";

function Menu({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Asian",
    "Italian",
    "Desserts",
    "Drinks",
  ];
  const filteredFood =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(
          (food) => food.category === selectedCategory
        );
  return (
    <section className="menu-section" id="menu">
      <div className="menu-heading">
        <h2>Our Menu</h2>

        <p>
          Select a category to view dishes
        </p>

        <div className="category-buttons">
          {categories.map((category) => (
      <button
          key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
            >
              {category}
            </button>

          ))}
        </div>
      </div>

      <div className="food-grid">
        {filteredFood.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />

        ))}

      </div>
    </section>
  );
}
export default Menu;