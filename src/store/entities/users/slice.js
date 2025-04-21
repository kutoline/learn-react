import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalizedMock";

const initialState = {
    entities: normalizedUsers,
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    selectors: {
        getUserById: (store, id) => store.entities.find(user => user.id === id)
    }
})

export const { getUserById } = usersSlice.selectors