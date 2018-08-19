export function leastCommented(state, payload) {
    if (payload === "open") {

        return [
            ...state,
            {
                openedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) > parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) > parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    } else {
        return [
            ...state,
            {
                closedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) > parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) > parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    }
}
export function mostCommented(state, payload) {
    if (payload === "open") {
        return [
            ...state,
            {
                openedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) < parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) < parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    } else {
        return [
            ...state,
            {
                closedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) < parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) < parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    }
}
export function oldest(state, payload) {
    if (payload === "open") {
        return [
            ...state,
            {
                openedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) < parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) < parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    } else {


        return [
            ...state,
            {
                closedIssues: state.sort(function (a, b) { return (parseInt(a.updatedTime) < parseInt(b.updatedTime)) ? 1 : ((parseInt(b.updatedTime) < parseInt(a.updatedTime)) ? -1 : 0); })
            },
            ...state
        ]
    }
}
export function newest(state, payload) {
    if (payload === "open") {
        return [
            ...state,
            {
                openedIssues: state.sort(function (a, b) { return (parseInt(a.numberOfComments) < parseInt(b.numberOfComments)) ? 1 : ((parseInt(b.numberOfComments) < parseInt(a.numberOfComments)) ? -1 : 0); })
            },
            ...state
        ]
    }
    else {


        return [
            ...state,
            {
                closedIssues: state.sort(function (a, b) { return (parseInt(a.updatedTime) > parseInt(b.updatedTime)) ? 1 : ((parseInt(b.updatedTime) > parseInt(a.updatedTime)) ? -1 : 0); })
            },
            ...state
        ]
    }
}
