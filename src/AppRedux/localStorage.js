// localStorage.js

// Save state to local storage
export const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('studentState', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  };
  
  // Load state from local storage
  export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('studentState');
      if (serializedState === null) {
        return undefined; // If no state is stored, return undefined (so Redux will use the initial state)
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  };
  