import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import posts from "./posts";
// import comments from "./commments";
import closedIssue from "./closedIssue";
import openedIssues from "./openedIssues";
import openComments from "./openComments";
import closedComments from "./closedComments";
const rootReducer = combineReducers({ openedIssues,closedIssue,openComments,closedComments, routing: routerReducer });

export default rootReducer;
