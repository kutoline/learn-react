import { normalizedDishes } from "../../../../materials/normalizedMock"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: normalizedDishes
}

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    selectors: {
        getDishByRestaurantId: (state, id) => state.entities.find(dish => dish.id === id)
    }
})

export const { getDishByRestaurantId } = dishesSlice.selectors