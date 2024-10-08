"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  try {
    console.log(`Fetching meal ideas for: ${ingredient}`);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    console.log("API Response: ", data);
    return data.meals || [];
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
      }
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal}>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="100"
                height="100"
              />
              <p>{meal.strMeal}</p>
            </li>
          ))
        ) : (
          <p>No meal ideas for this ingredient</p>
        )}
      </ul>
    </div>
  );
}
