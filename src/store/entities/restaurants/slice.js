import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalizedMock";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
    }, {}),
    ids: normalizedRestaurants.reduce((ids, restaurant) => [...ids, restaurant.id], [])
};

export const restaurantsSlice = createSlice({
    initialState,
    name: "restaurants",
    reducers: {},
    selectors: {
        getRestaurantsIds: (state) => state.ids,
        getRestaurantById: (state, id) => state.entities[id]
    }
});

export const { getRestaurantsIds, getRestaurantById } = restaurantsSlice.selectors;