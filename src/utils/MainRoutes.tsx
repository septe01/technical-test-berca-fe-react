import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Liga from "../page/Liga";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={"/la-liga"} />
      </Route>

      <Route path="/la-liga" exact>
        <Liga />
      </Route>

      {/* <Route path="/" exact>
        <Redirect to={"/app/dashboard"} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/register_new">
        <RegisterNew />
      </Route>
      <PrivateRoute path={"/app"} component={App} /> */}
    </Switch>
  );
};

export default MainRoutes;
