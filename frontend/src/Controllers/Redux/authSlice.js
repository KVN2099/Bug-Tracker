import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3500/`
})

const slice = createSlice({
    name: "auth",
    initialState: {
        admin: false,
        loggedIn: false    
    },
    reducers: { // These are the actions used for user and admin authentication
        signIn: async (state, action) => {
            console.log(action.payload);
            await api.post('/auth/login', action.payload).then((res) => {
                if (res.status === 200) {
                    alert("entra");
                    state.loggedIn = true;
                    state.admin = true;
                    console.log(state);
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        signOut: (state) => {
            state.loggedIn = false;
            state.admin = false;
        },
        createUser: (state, action) => {

        }
    }
})

export default slice.reducer;
export const { signIn, signOut, createUser } = slice.actions; // Export actions to combine with other slices