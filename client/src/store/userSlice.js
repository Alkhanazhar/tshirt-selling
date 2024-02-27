import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {},
        isAdmin: false
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        toggleIsAdmin: (state) => {
            state.isAdmin = !state.isAdmin
        }
    }
})
export const { addUser, toggleIsAdmin } = userSlice.actions;
export default userSlice.reducer;