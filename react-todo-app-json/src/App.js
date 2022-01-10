import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/loading";
import Todo from "./components/todo";
import PostForm from "./components/PostForm";
import PutForm from "./components/PutForm";
import DeleteForm from "./components/DeleteForm";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Postdetail from "./components/Postdetail";
import DeleteDetail from "./components/DeleteDetail";

class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: result.data });
  }

  changedtodos = (changes) => {
    console.log(changes);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === changes.id) {
          todo.userId = changes.userId[0];
          todo.title = changes.title[0];
          todo.completed = changes.completed;
        }
        return todo;
      }),
    });
  };

  deletedtodos = (deleted) => {
    console.log(deleted);
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== Number(deleted[0]);
      }),
    });
  };

  render() {
    let newtodos = (newtodo) => {
      this.setState({ todos: [...this.state.todos, newtodo] });
      console.log(this.state);
    };

    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <div className="container">
                    {this.state.todos.length > 0 ? (
                      <Todo todos={this.state.todos} />
                    ) : (
                      <Loading />
                    )}
                  </div>
                )}
              />
              <Route
                path="/newtodo"
                exact
                render={(props) => <PostForm todos={newtodos} {...props} />}
              />
              <Route
                path="/update"
                exact
                render={(props) => (
                  <PutForm todos={this.changedtodos} {...props} />
                )}
              />
              <Route
                path="/delete"
                exact
                render={(props) => (
                  <DeleteForm todos={this.deletedtodos} {...props} />
                )}
              />
              <Route
                path="/update/:id"
                exact
                render={(props) => (
                  <Postdetail todos={this.changedtodos} {...props} />
                )}
              />
              <Route
                path="/delete/:id"
                exact
                render={(props) => (
                  <DeleteDetail todos={this.deletedtodos} {...props} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
