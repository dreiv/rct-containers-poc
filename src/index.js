import React from "react";
import ReactDOM from "react-dom";

import users from "./users.json";
import "./styles.css";

const createListItem = ({ id, name }) => <li key={id}>{name}</li>;

const UserList = ({ users }) => (
  <ul className="user-list">{users.map(createListItem)}</ul>
);

function App() {
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
