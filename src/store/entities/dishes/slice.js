import { normalizedDishes } from "../../../../materials/normalizedMock"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: normalizedDishes.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
    }, {}),
    ids: normalizedDishes.map(entity => entity.id)
}

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    selectors: {
        getDishById: (state, id) => state.entities[id],
        getDishIds: (state) => state.ids,
    }
})

export const { getDishById } = dishesSlice.selectors