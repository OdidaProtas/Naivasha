import { createContext } from "react";

export const initialState = {
  user: null,
  isLoggedIn: false,
  cars: [],
  users: [],
};

const StateContext = createContext(initialState);
export default StateContext;
