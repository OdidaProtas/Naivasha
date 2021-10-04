import React, { Suspense, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useAxios } from "../constants";
import { LoginScreen } from "../screens";
import { StateContext } from "../state";
import ProtectedRoute from "./ProtectedRoute";

const requestOptions: any = {
  method: "get",
  isAuthenticated: false,
  endpoint: "/todos",
};
function Home() {
  const { processRequest, loading, data }: any = useAxios();
  const errorHandler = () => alert("An error occured while fetching data");
  const successHandler = () => {};
  useEffect(() => {
    processRequest({
      ...requestOptions,
      errorHandler: errorHandler,
      successHandler: successHandler,
    });
  }, []);
  useEffect(() => {}, [data]);
  return (
    <div>
      <p>HomeComponent</p>
      <ul>
        <Link to="/protected">Protected Route</Link>
      </ul>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        <div>
          {data
            ? data.map((data: any, idx: number) => (
                <p key={idx}>{data.title}</p>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

function Account() {
  const { signOut }: any = useContext(StateContext);
  const handleSignOut = () => signOut();
  return (
    <div>
      <p>Account Component</p>
      <Link to="/">Back home</Link>
      <p>You signed in, you can now view this page</p>
      <a href="http://localhost:8000/o/authorize?state=random_state_string&client_id=vz28lyw0WNzAJbNFpScrahr8YejQMebNTtI8Q9PB&response_type=code">
        Sign in with artik
      </a>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

function NotFoundScreen() {
  return <div>Url not configured</div>;
}

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Suspense fallback={<div></div>}>
            <LoginScreen />
          </Suspense>
        </Route>
        <ProtectedRoute component={Account} exact path="/protected" />
        <Route exact path="**">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}
