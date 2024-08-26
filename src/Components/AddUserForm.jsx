import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!user.name || !user.username) return;
          props.addUser(user);
          setUser(initialFormState);
        }}
        className="d-flex p-2 flex-column"
      >
        <div className="form-group pb-3">
          <label htmlFor="">Name: </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Enter Your Name..."
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="">Username: </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Enter Your Username..."
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
