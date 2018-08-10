import React, { Component } from "react";
import ReactDOM from "react-dom";

import userData from "./users.json";
import "./styles.css";

const createListItem = ({ id, name }) => <li key={id}>{name}</li>;

const UserList = ({ users }) => (
  <ul className="user-list">{users.map(createListItem)}</ul>
);

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    this.setState({ users: userData });
  }

  render() {
    const { users } = this.state;
    return <UserList users={users} />;
  }
}

function App() {
  return (
    <div className="App">
      <UserListContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
