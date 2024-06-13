import "./App.css";
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";


const App = () => {
  const [userState, setUserState] = useState({
    loading: true,
    data: [],
    error: null,
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setUserState((prev) => ({
          ...prev,
          loading: false,
          data: res,
        }));
      })
      .catch((error) => {
        setUserState((prev) => ({
          ...prev,
          loading: false,
          error: "Something went wrong",
        }));
      });
  }, []);

  const filteredUsers = userState.data?.filter((user) => {
    if (filter === "even") {
      return user.id % 2 === 0;
    } else if (filter === "odd") {
      return user.id % 2 !== 0;
    }
    return true;
  });

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("even")}>Even</button>
        <button onClick={() => setFilter("odd")}>Odd</button>
      </div>
      <div className="user-cards-container">
        {userState.loading && <h1>Loading Users...</h1>}
        {filteredUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
