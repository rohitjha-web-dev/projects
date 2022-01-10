import React from "react";
import "./CSS/todo.css";
import { Link } from "react-router-dom";

class Todo extends React.Component {
  render() {
    const check = (completed) => {
      completed = !completed;
    };
    return (
      <div>
        <ul className="list-group">
          {this.props.todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              
              <span className="left">{todo.title}</span>
              <span className="right">
                <Link to={`/update/${todo.id}`}>
                  <button type="button" className="btn btn-info ">
                    Update
                  </button>
                </Link>
              </span>

              <span>
                <Link to={`/delete/${todo.id}`}>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
