import React from "react";

function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img
        src={food.image}
        alt={food.name}
      />
      <div className="food-content">

        <div className="food-title">
          <h3>{food.name}</h3>

          <span className="rating">
            ⭐ {food.rating}
          </span>
        </div>

        <p>
          {food.description}
        </p>

      </div>

      <div className="food-bottom">

        <span className="food-price">
          ${food.price.toFixed(2)}
        </span>

        <button
          className="add-button"
          onClick={() => addToCart(food)}
        >
          + Add to Cart
        </button>

      </div>
    </div>
  );
}
export default FoodCard;