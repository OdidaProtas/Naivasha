import { lazy } from "react";

const LoginScreen = lazy(() => import("./LoginScreen/LoginScreen"));
const SignupScreen = lazy(() => import("./SignupScreen/SignupScreen"));
const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
const CarFormScreen = lazy(() => import("./CarFormScreen/CarFormScreen"));
const CarDetailsScreen = lazy(
  () => import("./CarDetailsScreen/CarDetailsScreen")
);
export {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  CarFormScreen,
  CarDetailsScreen,
};
