import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CarDetailsScreen,
  CarFormScreen,
  ChatScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
} from "../screens";
import UsersScreen from "../screens/UsersScreen/UsersScreen";
import ProtectedRoute from "./ProtectedRoute";

function NotFoundScreen() {
  return <div>Url not configured</div>;
}

export default function AppNavigation() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div></div>}>
              <HomeScreen />
            </Suspense>
          </Route>

          <Route exact path="/login">
            <Suspense fallback={<div></div>}>
              <LoginScreen />
            </Suspense>
          </Route>
          <Route exact path="/signup">
            <Suspense fallback={<div></div>}>
              <SignupScreen />
            </Suspense>
          </Route>
          <Route exact path="/car/:id">
            <Suspense fallback={<div></div>}>
              <CarDetailsScreen />
            </Suspense>
          </Route>
          <ProtectedRoute component={ChatScreen} exact path="/community" />

          <ProtectedRoute component={UsersScreen} exact path="/community" />

          <ProtectedRoute component={CarFormScreen} exact path="/new" />
          <Route exact path="**">
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}
