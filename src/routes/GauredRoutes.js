import React from "react";
import { Route, Redirect } from "react-router-dom";

const ReDirectLogin = () => {
  return <Redirect to="/login" />;
};

const ReDirectRegister = () => {
  return <Redirect to="/register" />;
};

const GuardedRoute = ({ path, children, valid, exact }) => {
  return (
    <Route path={path} exact={exact}>
      {valid.firebaseUser && valid.user
        ? children
        : valid.firebaseUser
        ? ReDirectRegister
        : ReDirectLogin}
    </Route>
  );
};

export default GuardedRoute;
