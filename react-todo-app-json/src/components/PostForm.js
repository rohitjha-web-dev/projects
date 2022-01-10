import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      completed: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", this.state)
      .then((response) => {
        console.log(response.data);
        this.props.todos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/");
  };

  render() {
    const { id, title } = this.state;
    return (
      <div style={{ width: "30%", margin: "25px auto", textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="id"
              value={id}
              onChange={this.changeHandler}
              className="form-control "
              placeholder="Enter todo-id"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              className="form-control "
              placeholder="Enter new title"
            />
          </div>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
