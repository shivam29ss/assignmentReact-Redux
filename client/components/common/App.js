import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import * as commentActions from "../../actionCreator/comments";
// import * as postActions from "../../actionCreator/posts";
// import * as openActions from "../../actionCreator/openedIssues";
// import * as closedActions from "../../actionCreator/closedIssue";
// import * as openCommentActions from "../../actionCreator/openComments";
// import * as closedCommentActions from "../../actionCreator/closedComments";
import Main from "./Main";
// const actionCreators = {...openActions,...closedActions,openCommentActions,closedCommentActions }

function mapStateToProps(state) {
  return {
    openedIssues: state.openedIssues,
    closedIssue: state.closedIssue,
    openComments: state.openComments,
    closedComments: state.closedComments
  };

}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }


const App = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Main);

export default App;
