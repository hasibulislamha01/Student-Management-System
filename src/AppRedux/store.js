import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./StudentSlice";
import { loadStateFromLocalStorage, saveStateToLocalStorage } from "./localStorage";

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    student: StudentSlice,
  },
  preloadedState, // Set the initial state from localStorage
});

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState().student); // Save only the student slice of state
});

export default store;