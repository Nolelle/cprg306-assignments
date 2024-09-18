"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const id = Math.random().toString(36).substring(2, 15);
    const item = {
      id,
      name,
      quantity,
      category
    }

    onAddItem(item);

    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className="flex flex-col items-center space-y-4 p-8 text-black">
      <form
        onSubmit={onAddItem}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <label
          htmlFor="name"
          className="block mb-2"
        >
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </label>

        <div className="text-2xl mt-4 mb-2">Quantity: {quantity}</div>
        <div className="flex space-x-4">
          {quantity === 20 ? (
            <button
              type="button"
              onClick={increment}
              disabled={true}
              className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Increment
            </button>
          ) : (
            <button
              type="button"
              onClick={increment}
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
            >
              Increment
            </button>
          )}

          {quantity === 1 ? (
            <button
              type="button"
              onClick={decrement}
              disabled={true}
              className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Decrement
            </button>
          ) : (
            <button
              type="button"
              onClick={decrement}
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
            >
              Decrement
            </button>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="category"
            className="block mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md p-2 w-full "
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen_foods">Forzen Foods</option>
            <option value="canned_goods">Canned Goods</option>
            <option value="dry_goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={handleFormSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
