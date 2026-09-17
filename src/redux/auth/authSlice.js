import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("loggedUser") || "null");
const initialState = {
  user: savedUser || [],
  isAuthenticated: savedUser ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const existingUser = users.find(
        (user) => user.email === action.payload.email,
      );

      if (existingUser) {
        return;
      }

      users.push(action.payload);

      localStorage.setItem("users", JSON.stringify(users));
    },

    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const user = users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );

      if (user) {
        state.user = user;
        state.isAuthenticated = true;

        localStorage.setItem("loggedUser", JSON.stringify(user));
      }
    },

    updateProfile: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const index = users.findIndex((user) => user.email === state.user.email);

      if (index !== -1) {
        users[index] = {
          ...users[index],
          ...action.payload,
        };

        state.user = users[index];

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("loggedUser", JSON.stringify(users[index]));
      }
    },

    logout: (state) => {
      state.user = [];
      state.isAuthenticated = false;

      localStorage.removeItem("loggedUser");
    },
  },
});

export const { register, login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
