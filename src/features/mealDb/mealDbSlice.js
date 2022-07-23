import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchMeals = createAsyncThunk("meals/fetchMeals",async()=>{
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return res.data
})

export const mealDbSlice = createSlice({
    name:'meals',
    initialState:{
        isLoading:false,
        error:null,
        meals:[]
    },
    extraReducers:(builder)=>{
 builder.addCase(fetchMeals.pending,(state) =>{
    state.isLoading = true;
 })
 builder.addCase(fetchMeals.fulfilled,(state, action) =>{
    state.isLoading = false;
    state.meals = action.payload
    state.error = null
 })
 builder.addCase(fetchMeals.pending,(state, action) =>{
    state.isLoading = false;
    state.error = action.error.message;
    state.meals = []
 })
    }
})
export default mealDbSlice.reducer