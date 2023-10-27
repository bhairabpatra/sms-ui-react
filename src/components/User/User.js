import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const apiEndpoint = " http://localhost:3000/user";
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log("getting froom", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const array = user.map((user) => {
    return (
      <tr>
        <td> <Link to={`${user.id}`} > {user.id} </Link></td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
        <td><button className="btn btn-success">Create</button></td>
      </tr>
    );
  });

  return (
    <div>
      <h3>User</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Passwoord</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delte</th>
            <th>Create</th>
          </tr>
        </thead>
        <tbody>{array}</tbody>
      </table>
    </div>
  );
}

export default User;
