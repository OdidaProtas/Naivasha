import React, { useContext } from "react";
import { useHistory } from "react-router";
import { StateContext } from "../../state";

export default function NavbarComponent() {
  const history = useHistory();
  const { getAppState, signOut }: any = useContext(StateContext);
  const { isLoggedIn } = getAppState();

  return (
    <div>
      <ul>
        {isLoggedIn ? (
          <li onClick={() => signOut("/login")}>logout</li>
        ) : (
          <li onClick={() => history.push("/login")}>login</li>
        )}
        <li onClick={() => history.push("/new")}>Add new entry</li>
      </ul>
    </div>
  );
}
