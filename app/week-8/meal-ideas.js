"use client"

import { useEffect, useState } from "react"

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}")
        const data = await response.json()
        return data.meals

    } catch (error) {
        console.error("Error: ", error)
        return []
    }
}

export default function MealIdeas({ingredient}) {
    const [meals,setMeals] = useState([])

    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient)
            setMeals(mealIdeas)
        }
    }

useEffect(() =>{
    loadMealIdeas()

},[ingredient])

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => {
                        <li key = {meal.idMeal}>
                        <img src = {meal.strMealThumb}, alt = {meal.strMeal} width = "100"/>
                        <p>name = {meal.strMeal}</p>
                        </li>
                    })
                ) : (
                    <p>No meal ideas for this ingredient</p>
                )}
            </ul>
        </div>
    )
}