import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux/';
import { fetchMeals } from './mealDbSlice';
import './mealDb.css';

const MealDb = () => {
    const {isLoading, meals, error} = useSelector(state => state.meals)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchMeals())
    },[])
    console.log(meals.categories)
    const allMeals = meals.categories
    return (
        <div>
            <h3>All Meals</h3>
            {isLoading && <h3>Loading....</h3>}
            {error && <h3>{error}</h3>}
            <div className='meal-container'>
                {
                    allMeals.map(singleMeal => <div key={singleMeal.categories} className='single-meal'>
                        <img src={singleMeal.strCategoryThumb} alt="" />
                        <h3>{singleMeal.strCategory}</h3>
                        <p>{singleMeal.strCategoryDescription.slice(0, 200)}</p>
                        <button>Details</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MealDb;