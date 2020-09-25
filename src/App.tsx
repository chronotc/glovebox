import React, { useState } from "react";
import { TextField, List, ListItem } from "@material-ui/core";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addUser(name);
        setName("");
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value || "")}
      />
    </form>
  );
};

const UserList = ({ users }) => (
  <List>
    {users.map((user, i) => (
      <ListItem key={`user-${i}`}>{user}</ListItem>
    ))}
  </List>
);

export const App = () => {
  const [users, setUser] = useState<string[]>([]);

  return (
    <>
      <UserForm addUser={(user) => setUser(users.concat(user))} />
      <UserList users={users} />
    </>
  );
};
