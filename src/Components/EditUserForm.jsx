import React, { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!user.name || !user.username) return;
          props.updateUser(user.id, user);
        }}
        className="d-flex flex-column p-2"
      >
        <div className="form-group pb-3">
          <label htmlFor="">Name: </label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Username: </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="pt-3">
          <button className="btn btn-primary px-4">Update User</button>
        </div>
        <div className="pt-3">
          <button
            className="btn btn-primary px-4"
            onClick={() => props.setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
