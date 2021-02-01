import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../bugController';

const slice = createSlice({
    name: "bug",
    initialState: [],
    reducers: { // These are the actions related to bug information
        getBugs: state => retrieveBugs(), // The state will hold the bugs retrieved from the bug controller
        createBugs: (state, actions) => {

        },
        updateBugs: (state, actions) => {

        },
        markComplete: (state, action) => {
            
        }
    }
})

export default slice.reducer;

export const { getBugs, createBugs, updateBugs, markComplete } = slice.actions; // Export actions to combine with other slices