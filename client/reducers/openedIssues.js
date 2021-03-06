import {newest,oldest,mostCommented,leastCommented} from "../actions/openIssues"
import C from "../data/constants"

function openedIssues(state = [], action) {
  switch (action.type) {
    case C.NEWEST_ISSUES:
      return newest(state, action.payload);
      case C.OLDEST_ISSUES:
      return oldest(state, action.payload);
      case C.MOST_COMMENTED:
      return mostCommented(state, action.payload);
      case C.LEAST_COMMENTED:
      return leastCommented(state, action.payload);
    default:
      return state;
  }

  return state;
}

export default openedIssues;
