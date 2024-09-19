"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData)

    const handleAddItem = (item) => {
        setItems([...items,item])
    }


    return (
        <main>
            <h1 className = "font-bold text-xl">Shopping List</h1>
            <NewItem 
            onAddItem = {handleAddItem}
            />
            <ItemList
            items = {items}
            />
        </main>
    )

}