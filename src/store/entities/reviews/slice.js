import { normalizedReviews } from "../../../../materials/normalizedMock"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: normalizedReviews
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    selectors: {
        getReviewById: (state, id) => state.entities.find((review) => review.id === id)
    }
})

export const { getReviewById } = reviewsSlice.selectors