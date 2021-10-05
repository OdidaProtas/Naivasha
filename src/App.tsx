import { useMemo, useReducer, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavigation from "./navigation/AppNavigation";
import {
  initialState,
  reducer,
  StateContext,
  stateMemo,
  bootstrapAsync,
} from "./state";
import { useAxios } from "./constants";

const requestOptions: any = {
  method: "get",
  isAuthenticated: false,
  endpoint: "/vi/car",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) as any;
  const stateContext: any = useMemo(() => stateMemo(dispatch, state), []);
  const { processRequest, loading, data } = useAxios();
  const getAppState = () => state;

  useEffect(() => {
    const bootstrap = () => bootstrapAsync(dispatch);
    processRequest({
      ...requestOptions,
    });
    bootstrap();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch({ type: "UPDATE_CARS", payload: data });
    }
  }, [data]);
  return (
    <StateContext.Provider value={{ ...stateContext, getAppState, loading }}>
      <AppNavigation />
    </StateContext.Provider>
  );
}

export default App;
