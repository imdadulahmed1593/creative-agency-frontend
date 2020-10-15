import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { useStateValue } from "./StateProvider";

function PrivateRoute({ children, ...rest }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
