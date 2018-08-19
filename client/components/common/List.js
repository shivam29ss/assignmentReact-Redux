import React from "react";



class List extends React.Component {
    componentWillMount(){

    }
    render(props) {
     
        const { todo, i, status } = this.props;

        if (status ==="open") {


            return (
                <div className="list-content">
                    <p className="text-color-black">
                    &#9888;<b> {todo.title} </b>
                    </p>
                    <p className="margin-left text-color-gray">
                        <span>{todo.number} </span>
                        <span>{todo.status} </span>
                        <span>{todo.lastUpdatedTime}</span>
                        <span>by </span>
                        <span>{todo.user} </span>
                        <span className="comment-icon">{todo.numberOfComments} &#xf0e5;</span>
                    </p>
                </div>
            )
        }
        else {
            return (
                <div className="list-content">
                    <p className="text-color-black">
                    &#xf06a; <b>{todo.title} </b>
                    </p>
                    <p className="margin-left text-color-gray">
                        <span>{todo.number} </span>
                        <span>{todo.user} </span>
                        <span>was</span>
                        <span>{todo.status} </span>
                        <span>{todo.lastUpdatedTime}</span>
                        <span className="comment-icon">{todo.numberOfComments} &#xf0e5;</span>
                    </p>
                </div>
            )

        }
    }
}
export default List;