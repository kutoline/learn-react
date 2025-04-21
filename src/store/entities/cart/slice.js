import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const productIndex = state.products.findIndex(product => product.id === payload.id);

            if (productIndex > -1) {
                state.products[productIndex].price += payload.price
                state.products[productIndex].amount = payload.amount
            } else {
                state.products.push(payload);
            }
        },
        removeFromCart: (state, { payload }) => {
            const productIndex = state.products.findIndex(product => product.id === payload.id);

            if ((productIndex > -1) && payload.amount === 0) {
                state.products.splice(productIndex, 1)
            } else if ((productIndex > -1)) {
                state.products[productIndex].price -= payload.price
                state.products[productIndex].amount = payload.amount
            }
        }
    },
    selectors: {
        getCart: (state) => state,
    }
})

export const { getCart } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;

