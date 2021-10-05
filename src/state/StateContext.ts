import { createContext } from "react";

export const initialState = {
  user: null,
  isLoggedIn: false,
  cars: [],
};

const StateContext = createContext(initialState);
export default StateContext;
