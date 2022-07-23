import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../features/counter/counterSlice";
import mealDbReducer from "../features/mealDb/mealDbSlice";


const store = configureStore({
    reducer:{
        counter:counterReducer,
        meals: mealDbReducer
    }
})
export default store