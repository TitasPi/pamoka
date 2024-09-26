import { useState } from "react";
import { nanoid } from "nanoid";

function UseStateElement() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div>
      <p>User: {user}</p>
      <input
        onChange={(e) => setUser(e.target.value)}
        className="border rounded-md px-2 py-1 m-2"
      />
      <button
        onClick={(e) => {
          console.log(nanoid());
          setUsers([...users, { id: nanoid(), name: user }]);
        }}
        className="border rounded-md px-2 py-1"
      >
        Add
      </button>

      {users.map((u) => (
        <p key={u.id}>
          User - {u.name}{" "}
          <button
            onClick={(e) => {
              setUsers(
                users.filter((uu) => {
                  return uu.id !== u.id;
                })
              );
            }}
            className="border rounded-md px-2 py-1"
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}

export default UseStateElement;
