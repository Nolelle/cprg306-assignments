"use client";

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(" ")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <h1 className="font-bold text-xl">Shopping List</h1>
      <div className="flex">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
