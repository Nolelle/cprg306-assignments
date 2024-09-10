"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
    <main className="flex flex-col items-center space-y-4 p-8">
      <div className="text-2xl">Quantity: {quantity}</div>
      <div>
        {quantity == 20 ? (
          <button
            onClick={increment}
            disabled={true}
            className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Increment
          </button>
        ) : (
          <button
            onClick={increment}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
          >
            Increment
          </button>
        )}
      </div>
      <div>
        {quantity == 1 ? (
          <button
            onClick={decrement}
            disabled={true}
            className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Decrement
          </button>
        ) : (
          <button
            onClick={decrement}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
          >
            Decrement
          </button>
        )}
      </div>
    </main>
  );
}
