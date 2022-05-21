import { createSlice } from "@reduxjs/toolkit";

const initailCartState = {
    item: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initailCartState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.item.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.id != id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;