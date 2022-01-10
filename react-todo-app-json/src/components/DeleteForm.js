import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router-dom";

class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .delete(
        "https://jsonplaceholder.typicode.com/todos/" + this.state.id,
        this.state
      )
      .then((response) => {
        this.props.todos(this.state.id);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  render() {
    const { id } = this.state;
    return (
      <div style={{ width: "30%", margin: "25px auto", textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="number"
              name="id"
              value={id}
              onChange={this.changeHandler}
              class="form-control "
              placeholder="Enter todo's-id you want to delete"
            />
          </div>
          <br />
          <button className="btn btn-danger" type="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(DeleteForm);
