import React from "react";
import Comment from "./Comment";

const IssueComment = props => {
    const { postId, comments, params } = props;
    return (
        <div className="comment-desc" >
            {comments.map((comment, i) => {
                return (
                    <Comment comment={comment}
                        i={i}
                        key={i}
                        postId={postId}
                    />
                )
            })}
        </div>
    )
}


export default IssueComment;