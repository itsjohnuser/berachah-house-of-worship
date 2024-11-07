import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // No user by default
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null; // Clear user data on logout
    },
  },
});

// export const { setUser } = userSlice.actions;
export const { setUser, login, logout } = userSlice.actions;

export default userSlice.reducer;
