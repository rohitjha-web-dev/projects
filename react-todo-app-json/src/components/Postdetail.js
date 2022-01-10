import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class PostForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userId: "",
      title: "",
      completed: false,
      id: props.match.params.id,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://jsonplaceholder.typicode.com/todos/" + this.state.id,
        this.state
      )
      .then((response) => {
        this.props.todos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/");
  };

  render() {
    const { userId, title, id } = this.state;
    return (
      <div style={{ width: "30%", margin: "25px auto", textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
              class="form-control "
              placeholder="Enter todo's userId"
            />
            <br />
          </div>
          <div>
            <input
              type="number"
              name="id"
              value={id}
              style={{ display: "none" }}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="completed"
              value={false}
              style={{ display: "none" }}
              onChange={this.changeHandler}
              class="form-control "
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              class="form-control "
              placeholder="Enter todo's title"
            />
          </div>
          <br />
          <button class="btn btn-warning">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
