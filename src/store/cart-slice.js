import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { quentity: 1 },
    reducers: {
        // increase(state) {
        //     state.quentity + 1;
        // },
        // decrease(state) {
        //     state.quentity - 1;
        // }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;