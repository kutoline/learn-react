import { normalizedReviews } from "../../../../materials/normalizedMock"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: normalizedReviews.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
    }, {}),
    ids: normalizedReviews.map(entity => entity.id)
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    selectors: {
        getReviewById: (state, id) => state.entities[id],
        getReviewsIds: (state) => state.ids,
    }
})

export const { getReviewById } = reviewsSlice.selectors