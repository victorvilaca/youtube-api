import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "./features/login";

export const Routes = props => {
  const { isAuthenticated } = props;

  let routes = null;
  if (!isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        {/* <Route exact path="/videos" component={Videos} />
        <Redirect to="/videos" component={Videos} /> */}
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }

  const AppRoutes = withRouter(p => routes);
  return <AppRoutes />;
};

export default Routes;
