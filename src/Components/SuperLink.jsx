import React from "react";
import { Route, Link } from "react-router-dom";

const SuperLink = ({ to, exact, ...rest }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        return (
          <li className={match ? "active" : ""}>
            <Link to={to} {...rest} />
          </li>
        );
      }}
    />
  );
};

export default SuperLink;
