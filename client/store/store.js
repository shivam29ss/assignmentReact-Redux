import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import rootReducer from "../reducers/index";
import openedIssues from "../data/openedIssues";
import closedIssue from "../data/closedIssue";
import openComments from "../data/openComments";
import closedComments from "../data/closedComments";

const defaultState = {
  openedIssues,
  closedIssue,
  openComments,
  closedComments

};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("../reducers/", () => {
    const nextRootReducer = require("../reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
