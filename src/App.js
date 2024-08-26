import logo from "./logo.svg";
import "./App.css";
import UserTable from "./Components/UserTable";
import { useState } from "react";
import AddUserForm from "./Components/AddUserForm";
import EditUserForm from "./Components/EditUserForm";

function App() {
  const usersData = [
    {
      id: 1,
      name: "Loki",
      username: "loki7",
    },
    {
      id: 2,
      name: "John",
      username: "john12",
    },
    {
      id: 3,
      name: "Joseph",
      username: "joe3",
    },
  ];

  const [users, setUsers] = useState(usersData);
  const [isEditing, setIsEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setIsEditing(false);
  };

  const editRow = (user) => {
    setIsEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setIsEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="pt-5">
      <div className="container pt-5 pb-5 bg-secondary-light d-flex flex-column align-items-center border rounded shadow-lg">
        <h2 className="w-100 text-center border">CRUD Application</h2>
        <div className="row w-100 d-flex flex-row justify-content-center align-items-start pt-5 gap-5 flex-sm-wrap flex-sm-w-50">
          <div
            className="border p-5 col-sm-12 col-md-5"
            style={{ Width: "40%" }}
          >
            {isEditing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setIsEditing={setIsEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div
            className="border p-5 col-sm-12 col-md-5"
            style={{ Width: "40%" }}
          >
            <h2>View User</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
