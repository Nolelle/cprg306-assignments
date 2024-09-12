"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("category");

  const handleSortByName = (event) => {
    setSortBy("name");
  };

  const handleSortByCategory = (event) => {
    setSortBy("category");
  };

  const handleGroupByCategory = (event) => {}

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  } 

  return (
    <main className="p-4">
      <button
        type="button"
        onClick={handleSortByName}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Sort by name
      </button>
      <button
        type="button"        
        onClick={handleSortByCategory}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Sort by category
      </button>

      <button
        type="button"        
        onClick={handleGroupByCategory}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
       Grouped Category 
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
