import React, { createContext, useReducer } from "react";
const initialState = { images: [], authed: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "authed":
        return Object.assign({}, state, { authed: action.payload });
      case "images":
        return Object.assign({}, state, { images: action.payload });
      case "location":
        return Object.assign({}, state, { location: action.payload });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
