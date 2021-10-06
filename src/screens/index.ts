import { lazy } from "react";

const LoginScreen = lazy(() => import("./LoginScreen/LoginScreen"));
const SignupScreen = lazy(() => import("./SignupScreen/SignupScreen"));
const HomeScreen = lazy(() => import("./HomeScreen/HomeScreen"));
const CarFormScreen = lazy(() => import("./CarFormScreen/CarFormScreen"));
const CarDetailsScreen = lazy(
  () => import("./CarDetailsScreen/CarDetailsScreen")
);
const UserScreen = lazy(() => import("./UsersScreen/UsersScreen"));


const  ChatScreen = lazy(()=>import("./ChatScreen/ChatScreen"))
export {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  CarFormScreen,
  CarDetailsScreen,
  UserScreen,
  ChatScreen
};
