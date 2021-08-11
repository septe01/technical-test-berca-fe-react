import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "../page/404";
import Liga from "../page/Liga";
import LigaDetail from "../page/LigaDetail";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={"/liga-soccer"} />
      </Route>

      <Route path="/liga-soccer" exact>
        <Liga />
      </Route>

      <Route path="/liga-soccer/detail" exact>
        <LigaDetail />
      </Route>

      <Route path="*" exact>
        <PageNotFound />
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
