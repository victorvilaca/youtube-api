import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "./features/login";
import ListVideos from "./features/videos";

export const Routes = props => {
  const routes = (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/videos" render={props => <ListVideos {...props} />} />
      <Redirect to="/login" />
    </Switch>
  );

  const AppRoutes = withRouter(p => routes);
  return <AppRoutes />;
};

export default Routes;
