import React from 'react';
import List from "./List";
import IssueDescription from './IssueDescription';
import { Link } from "react-router";
import C from "../../data/constants";

class pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosOpen: props.openedIssues,
            todosClosed: props.closedIssue,
            status: "open",
            currentPage: 1,
            todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }

    handleClick(event) {

        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleStatus() {
        status = this.state.status;
        if (status === "open") {
            status = "closed";
        }
        else {
            status = "open";
        }
        this.setState({
            status,
        })
    }

    render() {

        const { todosOpen, todosClosed, currentPage, todosPerPage, status } = this.state;
        var todos = todosOpen;
        if (status != "open") {
            todos = todosClosed;
        }
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
            return <Link key={index} to={`${C.LINK_TO_DESCRIPTION}/${todo.id}/${this.state.status}`} className="text-decoration">
                <li key={index}>

                    <List key={index}
                        status={this.state.status}
                        i={index}
                        todo={todo}

                    />
                </li>
            </Link>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <span className="page-number"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </span>
            );
        });

        return (
            <div>
                <ul className="issue-status">

                    <li className="list-content bg-color-grey">
                        <span onClick={this.handleStatus}>&#9888; {todosOpen.length} Open</span>
                        <span onClick={this.handleStatus}>&#xf06a;{todosClosed.length} Closed</span>
                        <div className="dropdown">
                            <button className="dropbtn">sort</button>
                            <div className="dropdown-content">
                                <a href="#" > Newest</a>
                                <a href="#">Oldest</a>
                                <a href="#">Most commented</a>
                                <a href="#">Least commented</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul >
                    {renderTodos}
                </ul>
                <ul className="pageno-align">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}


export default pagination;
