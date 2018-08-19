import React from "react";
const Comment = ({
    postId,
    comment,
    i
}) => (
        <div className="comment-desc">
            <div className="border-box width-box bg-color-grey" >
                <span> {comment.user}</span>
                <span> commented on</span>
                <span> {comment.lastUpdatedtime}</span>

            </div>
            <div className="border-box width-box comment-text">
                {comment.text}
            </div>
            <div className="border-box width-box">
                <span className=" border-box comment-likes">
                    {comment.noOfLikes}
                </span>
                <span> like</span>
            </div>
        </div>

    )

export default Comment;