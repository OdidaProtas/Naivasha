import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CarDetailsScreen,
  CarFormScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
} from "../screens";
import ProtectedRoute from "./ProtectedRoute";

function NotFoundScreen() {
  return <div>Url not configured</div>;
}

export default function AppNavigation() {
  return (
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
        <Suspense fallback={<div></div>}>
          <ProtectedRoute component={CarFormScreen} exact path="/new" />
        </Suspense>
        <Route exact path="**">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}
