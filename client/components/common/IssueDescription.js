import React from "react";
import IssueComment from "./IssueComment";

class IssueDescription extends React.Component {
    render() {
        const { params, openedIssues, closedIssue, openComments, closedComments } = this.props;
        const { postId } = this.props.params;
        const commentsOpen = openComments[postId] || [];
        const commentsClosed = closedComments[postId] || [];
        if (params.status === "open") {

            for (let i = 0; i < openedIssues.length; i++) {

                if (openedIssues[i].id === params.postId) {

                    return (
                        <div>
                            <h1>{openedIssues[i].title} <span className="text-color-gray">{openedIssues[i].number}</span></h1>
                            <p className="text-color-gray">
                                <span className="description-status"> &#9888; open</span>
                                <span>{openedIssues[i].user} </span>
                                <span>opened this issue on</span>
                                <span> jul 13</span>
                                <span>-{openedIssues[i].numberOfComments}</span>
                                <span>comment</span>
                            </p>
                            <hr />

                            <IssueComment postId={params.postId} comments={commentsOpen} />

                        </div>
                    )
                }
            }
        }


        else {
            for (let j = 0; j < closedIssue.length; j++) {
                if (closedIssue[j].id === params.postId) {
                    return (
                        <div>
                            <h1>{closedIssue[j].title} <span className="text-color-gray">{closedIssue[j].number}</span></h1>
                            <p className="text-color-gray">
                                <span className="description-status"> &#9888; closed</span>
                                <span>{closedIssue[j].user}></span>
                                <span>closed this issue on</span>
                                <span>jul 13</span>
                                <span>-{closedIssue[j].numberOfComments}</span>
                                <span>comment</span>
                            </p>
                            <hr />
                            <IssueComment postId={params.postId} comments={commentsClosed} />
                        </div>

                    )
                }
            }
        }
    }
}
export default IssueDescription;