const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case "RESTORE_TOKEN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "UPDATE_CARS":
      return {
        ...state,
        cars: action.payload,
      };
    case "ADD_CAR":
      const cars = state.cars;
      const newCars = cars.push(action.payload);
      
      return {
        ...state,
        cars: newCars,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
