import React, { useEffect, useState } from 'react';
import './meal.css'
import axios from "axios";

const MealApi = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response) => setItems(response.data.meals))
            .catch((error) => console.log(error))
    }, [])


    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className='card'>
                <img src={strMealThumb} alt="No image" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    });

    return (
        <div className='items-container'>
            {itemsList}
        </div>
    )

};

export default MealApi;