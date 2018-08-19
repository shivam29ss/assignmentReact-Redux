import React from "react";
import App from "./App";
import Issues from "./Issues";
import IssueDescription from "./IssueDescription";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import C from "../../data/constants";

const Routes = () => (
  <Router history={browserHistory}>
    <Route path={C.LINK_TO_HOME} component={App}>
      <IndexRoute component={Issues} />
      <Route path={`${C.LINK_TO_DESCRIPTION}/:postId/:status`} component={IssueDescription} />
    </Route>
  </Router>
);

export default Routes;
