import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    entities: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const dish = state.entities[payload.id];

            if (Object.hasOwn(state.entities, payload.id)) {
                dish.price += payload.price
                dish.amount = dish.amount + 1;
            } else {
                state.entities[payload.id] = { ...payload, amount: 1 }
            }
        },
        removeFromCart: (state, { payload }) => {

            const dish = state.entities[payload.id];

            if (Object.hasOwn(state.entities, payload.id) && dish.amount >= 1) {
                dish.price -= payload.price
                dish.amount = dish.amount - 1
            } else if (Object.hasOwn(state.entities, payload.id)) {
                delete state.entities[payload.id]
            }
        }
    },
    selectors: {
        getCartDishIds: (state) => {
            return Object.keys(state.entities).map(id => id)
        },
        getDishFromCartById: (state, id) => state.entities[id],
        getDishAmountById: (state, id) => state.entities[id]?.amount
    }
})

export const { getCartDishIds, getDishAmountById, getDishFromCartById } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;

