import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class PutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: "",
      completed: false,
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
        // console.log(response.data);
        this.props.todos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  render() {
    const {  title, id } = this.state;
    return (
      <div style={{ width: "30%", margin: "25px auto", textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <br />
          <div>
            <input
              type="number"
              name="id"
              value={id}
              onChange={this.changeHandler}
              className="form-control "
              placeholder=" Enter todo Id"
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
              placeholder="Enter title"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(PutForm);
