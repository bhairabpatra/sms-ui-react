import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const apiEndpoint = " http://localhost:3000/user/";
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(apiEndpoint.concat(id))
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h3>UserDetails {id}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Passwoord</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {item.name}</td>
            <td>{item.password}</td>
            <td>{item.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
