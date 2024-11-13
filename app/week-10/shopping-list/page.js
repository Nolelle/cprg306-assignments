"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const router = useRouter();

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems([...items, { ...item, id }]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(" ")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  useEffect(() => {
    const loadItems = async () => {
      const items = await getItems(user.uid).then((items) => setItems(items));
    };
    if (!user) {
      router.push("/week-10");
    } else {
      loadItems();
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-900 text-white">
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
