const stateMemo = (dispatch: any, state: any) => ({
  signIn: async (data: any) => {
    localStorage.setItem("userToken", `Bearer ${data}`);
    dispatch({ type: "SIGN_IN", payload: data });
  },
  signOut: async () => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  },
  updateCars: async (data: any) => {
    dispatch({ type: "UPDATE_CARS", payload: data });
  },
  addCar: async (data: any) => {
    dispatch({ type: "ADD_CAR", payload: data });
  },
});

export default stateMemo;
