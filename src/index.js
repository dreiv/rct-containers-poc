import React, { Component } from "react";
import ReactDOM from "react-dom";

import userData from "./users.json";
import "./styles.css";

const createListItem = onToggleActive => user => {
  const { id, name, active } = user;
  return (
    <li key={id}>
      <a href="#">{name}</a>
      <span>{active ? "Active" : "Inactive"}</span>
      <button onClick={onToggleActive.bind(null, user)}>Toggle Active</button>
    </li>
  );
};

const UserList = ({ users, onToggleActive }) => (
  <ul className="user-list">{users.map(createListItem(onToggleActive))}</ul>
);
UserList.defaultProps = {
  users: [],
  onToggleActive: () => {}
};

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: userData.map(user => ({ ...user, active: true })) };
  }

  handleToggleActive = user => {
    user.active = !user.active;
    this.forceUpdate();
  };

  render() {
    return (
      <UserList {...this.state} onToggleActive={this.handleToggleActive} />
    );
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
