import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({ name: "Kevin Romero" });
            state.push({ name: "Jason Valverde" });
        }
    }
})

export default slice.reducer;

export const { getUser } = slice.actions; // Export actions to combine with other slices