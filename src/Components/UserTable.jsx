import React from "react";
import { Container, Table } from "react-bootstrap";

const UserTable = (props) => {
  return (
    <div>
      <table className="table border">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => props.editRow(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => props.deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
