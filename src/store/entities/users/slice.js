import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalizedMock";

const initialState = {
    entities: normalizedUsers.reduce((acc, entity) => {
        acc[entity.id] = entity;
        return acc;
    }, {}),
    ids: normalizedUsers.map(entity => entity.id)
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    selectors: {
        getUserById: (state, id) => state.entities[id],
        getUsersIds: (state) => state.ids
    }
})

export const { getUserById } = usersSlice.selectors