"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("category");

  const handleSortByName = (event) => {
    setSortBy("name");
  };

  const handleSortByCategory = (event) => {
    setSortBy("category");
  };

  const handleGroupByCategory = (event) => {
    setSortBy("groupbycategory");
  };


  let sortedItems = [...items];
  let groupedCategoryItems = [];


  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "groupbycategory") {
    groupedCategoryItems = Object.entries(
      [...items].reduce((acc, currentItem) => {
        const key = currentItem.category;

        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(currentItem);

        return acc;
      }, {})
    ).map(([category, items]) => ({ category, items }));
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
        Group by Category
      </button>

      <ul>
        {sortBy === "groupbycategory"
          ? groupedCategoryItems.map(({ category, items }) => (
              <li key={category}>
                <h3 className="capitalize">{category}</h3>
                <div>
                  {items.map((item) => (
                    <div key={item.id}>
                      <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect = {() => onItemSelect(item)}
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))
          : sortedItems.map((item) => (
              <li key={item.id}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect ={() => onItemSelect(item)}
                />
              </li>
            ))}
      </ul>
    </main>
  );
}
