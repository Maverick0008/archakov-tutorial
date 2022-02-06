import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      let response = await fetch(
        "https://61ffc1cb5e1c4100174f6f2f.mockapi.io/users"
      );
      let user = await response.json();
      return setUsers(user);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </>
  );
};

export default App;
