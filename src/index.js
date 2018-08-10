import React, { Component } from "react";
import ReactDOM from "react-dom";

import userData from "./users.json";
import "./styles.css";

const createListItem = onClick => ({ id, name }) => (
  <li key={id}>
    {name}
    <button onClick={onClick}>Toggle Active</button>
  </li>
);

const UserList = ({ users, onClick }) => (
  <ul className="user-list">{users.map(createListItem(onClick))}</ul>
);

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    this.setState({ users: userData });
  }

  toggleActive = () => {
    console.log("weey...");
  };

  render() {
    const { users } = this.state;
    return <UserList users={users} onClick={this.toggleActive} />;
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
