import React, { useState, useEffect } from "react";

const Home = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3001");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  if (!users) return <h2>Loading...</h2>;

  return (
    <div>
      {users.map((user, i) => {
        return <h2 key={i}>{user.name}</h2>;
      })}
    </div>
  );
};

export default Home;
