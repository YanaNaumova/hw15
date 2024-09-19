import "./App.css";
import UserList from "./components/UserList";
import { useCallback, useMemo, useState } from "react";

function App() {
  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Edward" },
  ];

  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((text) => {
    const newList = userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    return newList;
  }, []);

  const users = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div className="App">
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
