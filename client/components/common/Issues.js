import React from "react";
import { Link } from "react-router";
import C from "../../data/constants";
import Filter from "./filter";
import NewIssue from "./NewIssue";
import Pagination from "./pagination";

const Issues = props => (
    <div>
        <div className="header-wrapper">
            <  span className="header-content">facebook/<b>create-react-app</b></  span>
            <p className="issue-wrapper">
                <Link to={C.LINK_TO_ISSUE} className="text-issue">  &#9888;
                <span>{props.openedIssues.length}</span>
                <span> Issues</span>
                </Link>
            </p>
        </div>
        <div className="align-component">
            <Filter />
            <NewIssue />
        </div>
        <Pagination {...props}/>
    </div>
)

export default Issues;



