import { createSlice } from "@reduxjs/toolkit";

// The podcast chosen, so it is saved across pages. Even more efficient than a client side SPA!

const initialState = {
    loading: true
};

export const loading = createSlice({
    name: "loading",
    initialState,
    reducers: {
        toggle: (state) => {
            state.loading = !state.loading
        }
    },
});

export const {
    toggle,
} = loading.actions;
export default loading.reducer;
